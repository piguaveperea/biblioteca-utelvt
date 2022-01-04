const modelo = require('../models/index')

exports.listarCategorias = async (req, res)=>{
    const categorias = await modelo.CATEGORIA.findAll();
    res.status(200).json({
        categorias: categorias
    })
}