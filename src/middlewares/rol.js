const model = require('../models/index')
exports.VerificarAdministrador = async (req, res,next)=>{
    const usuario = await model.USUARIO.findOne({where:{id:req.usuario_id}})
    const rol = await model.ROL.findOne({where:{rol: 'Administrador'}})
    if(usuario && usuario.rol ==  rol.id ){
        next()
    }
    else if(usuario && usuario != rol.id ){
        res.json({
            message:'no tienes autorizado hacer esto'
        })
    }
    else{
        res.json({
            message: 'el usuario no existe'
        })
    }
}

exports.VerificarEstudiante = ()=>{

}

exports.VerificarInvitado =()=>{

}