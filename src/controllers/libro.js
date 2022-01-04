const model = require('../models/index')
const dateformat = require('date-format')
const { Op } = require('sequelize')

exports.PedirLibro = async (req, res) => {
    const libro_id = req.body.libro_id
    const libro =await model.LIBRO.findOne({where:{id:libro_id}})
    if(libro){
        if(libro.ocupado == 0 || libro.ocupado == null){
            await model.LIBRO.update({ocupado:req.usuario_id},{where:{id:libro_id}})
            await model.DETALLE_LIBRO.create(
                {
                    biblioteca_id:1,
                    usuario_id: req.usuario_id,
                    libro_id:libro.id,
                    fecha: dateformat.asString("yyyy-MM-dd", new Date),
                    inicio: dateformat.asString("hh:mm:ss", new Date)
                }
            )
            res.status(200).json(
                {
                    message: 'operacion exitosa'
                }
            )
        }
        else{
            res.json(
                {
                    message: 'Libro ocupado'
                }
            )
        }
    }
    

}
exports.RegresarLibro = async(req, res)=>{
    const libro_id = req.body.libro_id
    const libro =await model.LIBRO.findOne({where:{id:libro_id}})
    if(libro){
        if(libro.ocupado == req.usuario_id ){
            await model.LIBRO.update({ocupado:0},{where:{id:libro_id}})
            await model.DETALLE_LIBRO.update({final: dateformat.asString('hh:mm:ss', new Date)},{where:{
                [Op.and]:[
                    {biblioteca_id: 1},
                    {usuario_id:req.usuario_id},
                    {libro_id: libro.id},
                    {final: null}
                ]
            }})
            res.json(
                {
                    message: 'regreso correctamente'
                }
            )
        }
        else{
            res.json({
                message: 'usted no puede hacer esta operación'
            })
        }
    }
}
exports.BuscarLibro = async (req, res)=>{
    const {
        text
    }= req.body

    const libros = await model.LIBRO.findAll(
        {
            where:{
                [Op.or]:[
                    {
                        titulo:{[Op.like]:`%${text}%`}
                    },
                    {
                        barcode:{[Op.eq]:text}
                    },
                    {
                        autor:{[Op.like]:`%${text}%`}
                    },
                    {
                        editorial:{[Op.like]:`%${text}%`}
                    },
                    {
                        pais:{[Op.like]:`%${text}%`}
                    }
                ],

            }
        }
    )

    res.json(
        {
            libros: libros
        }
    )
}
exports.ModificarLibro = async(req,res)=>{
    const {
        libro_id,
        titulo,
        autor,
        pais,
        editorial,
        nivel,
        estante,
        bloque
    } = req.body

    await model.LIBRO.update({
        titulo: titulo,
        autor: autor,
        pais: autor,
        pais: pais,
        editorial: editorial,
        nivel: nivel,
        estante: estante,
        bloque: bloque
    },{
        where:{
            id:{
                [Op.eq]: libro_id
            }
        }
    })
}
exports.CrearLibro = async(req,res)=>{
    const {
        titulo,
        autor,
        editorial,
        pais,
        barcode,
        fecha,
        biblioteca,
        bloque,
        estante,
        nivel
    } = req.body

    await model.LIBRO.create({
        titulo: titulo,
        autor: autor,
        pais: pais,
        fecha: fecha,
        barcode: barcode,
        biblioteca_id: biblioteca,
        editorial: editorial, 
        editorial: editorial, 
        bloque: bloque,
        estante: estante, 
        nivel: nivel
    })
}