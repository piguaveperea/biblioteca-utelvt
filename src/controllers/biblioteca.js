const modelo = require('../models/index')

exports.Listar = async (req, res)=>{
    const bibliotecas = await modelo.BIBLIOTECA.findAll()
    res.status(200).json({
        bibliotecas:bibliotecas
    })
}