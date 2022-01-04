const modelo = require('../models/index')

exports.Perfil = async (req, res) => {
    const id = req.token
    if (!id) {
        const usuario = await modelo.USUARIO.findOne({ where: { id: id } })
        res.status(200).json({
            usuario = usuario
        })
    }
    else{
        res.status(400).json(
            {
                message: 'no existe el usuario'
            }
        )
    }
    
}

exports.CambiarImagen = async(req, res)=>{
    const usuario = req.token
}