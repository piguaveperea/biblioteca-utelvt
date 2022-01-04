const { BIBLIOTECA } = require('../models/index')
const  model = require('../models/index')


exports.Crear = async (req, res)=>{
    const {
        biblioteca_id,
        sistema_operativo,
        ram,
        procesador,
        disco_duro,
        numero_computadora
    } = req.body
    
    await model.COMPUTADORA.create(
        {
            
        }
    )
}

exports.Modificar = async (req, res)=>{

}

exports.Eliminar = async(req, res)=>{

}

exports.Listar =  (req, res)=>{

} 