const modelo = require('../models/index')

exports.DetalleLibros = async (req, res)=>{ 
    const libros = await modelo.DETALLE_LIBRO.findAll({
        include: ['libro', 'biblioteca', 'usuario'],
        attributes:['fecha', 'inicio', 'final']   
    })
    res.json({
        libros: libros
    })
}