const model = require('../models/index')
const util = require('../utils/index')
const jwt = require('jsonwebtoken')
const { Op } = require('sequelize')


exports.CrearCuenta = async (req, res) => {
    const {
        cedula,
        nombres,
        apellidos,
        correo,
        clave
    } = req.body
    try {
        if (!(cedula, nombres, apellidos, correo, clave)) {
            res.status(400).json({
                message: 'completar todo los campos'
            })
        }
        else {
            if (await model.USUARIO.findOne({ where: { cedula: cedula } })) {
                res.status(200).json(
                    {
                        message: 'El usuario esta en uso'
                    }
                )
            }
            else if (await model.USUARIO.findOne({ where: { correo: correo } })) {
                res.status(401).json(
                    {
                        message: 'El correo esta en uso'
                    }
                )
            }
            else {
                const rol = await model.ROL.findOne({ where: { rol: 'Invitado' } })
                await model.USUARIO.create(
                    {
                        cedula: cedula,
                        nombres: nombres,
                        apellidos: apellidos,
                        correo: correo,
                        clave: util.PASSWORD.encryptString(clave),
                        rol_id: rol.id,
                    }
                ).then(() => {
                    res.status(201).json(
                        {
                            message: 'usuario creado correctamente'
                        }
                    )
                }).catch(() => {
                    res.status(401).json(
                        {
                            message: 'usuario no creado'
                        }
                    )
                })
                await util.EMAIL.sendMail(
                    {
                        from: '"Biblioteca UTELVT 📚"<process.env.EMAIL>',
                        to: correo,
                        subject: 'Bienvenido',
                        html: `
                            <div>
                                <h1> Bienvenid@ ${nombres} ${apellidos} </h1>
                                <div>
                                    <p> Para iniciar sesión puede hacer uso del correo o numero de cédula</p>
                                    <p> cédula: ${cedula} </p>
                                    <p> correo:  ${correo} </p>
                                    <p> contraseña: ${clave} </p>                               
                                </div>
                            </div>
                        `
                    }
                )
                    .then(() => { console.log('correo envido') })
                    .catch(() => { console.log('corro no enviado') })

            }
        }

    } catch (error) {
        console.log(error)
    }
}

exports.IniciarSesion = async (req, res) => {
    const {
        cedula_correo,
        clave
    } = req.body

    const usuario = await model.USUARIO.findOne(
        {
            where: {
                [Op.or]: [
                    { cedula: cedula_correo },
                    { correo: cedula_correo }
                ]
            }
        }
    )
    if (usuario) {
        if (util.PASSWORD.verifyPassword(clave, usuario.clave)) {
            const token = jwt.sign({usuario}, process.env.SECRET_KEY,{expiresIn: '5d'})
            res.json(
                {
                    message: "inicio de sesión exitosa",
                    token: token
                }
            )
        }
        else {
            res.json(
                {
                    message: 'contraseña incorrecta'
                }
            )
        }
    }
    else {
        res.json(
            {
                message: 'El usuario no exite o contraseña incorrecta'
            }
        )
    }
}

exports.RecuperarClave = async (req, res) => {
    const {
        cedula,
        correo
    } = req.body

    const usuario = await model.USUARIO.findOne({
        where: {
            [Op.and]: [
                { cedula: cedula },
                { correo: correo }
            ]
        }
    })

    //const token = await jwt.sign({id: usuario.id, cedula: usuario.cedula, fullName:usuario.nombres+" "+nombres.apellidos}, process.env.SECRET_KEY,{ expiresIn: '3m'})
    if (usuario) {
        await util.EMAIL.sendMail(
            {
                from: '"Biblioteca UTELVT  📚" <process.env.EMAIL>',
                to: correo,
                subject: 'Repuperar Clave',
                html: '<div><h1>Gracias<h1></div>'
            }
        ).then(() => { res.json("correo enviado") })
            .catch(() => { res.status(400).json({ message: 'no se puedo enviar el correo electronico' }) })
    }
    else {
        res.json({
            message: 'correo enviado correctamente'
        })
    }



}

exports.CabiarClave = async (req, res) => {
    const token = req.params.token
    const {
        clave,
        repertir_clave
    } = req.body
    if (!clave && !repertir_clave) {
        if (clave == repertir_clave) {
            const payload = await jwt.verify(token, process.env.SECRET_KEY)
            try {
                await model.USUARIO.update({ clave: util.PASSWORD.encryptString(clave) }, { where: { id: payload.id } })
                res.json(
                    {
                        message: "La contraseña fue cambiada correctamente"
                    }
                )
            } catch (error) {
                res.status(400).json({
                    message: "No se pudo actualizar la contraseña"
                })
            }


        }
        else {
            res.json(
                {
                    message: "La contraseña no considen"
                }
            )
        }
    }
}