const router = require('express').Router()
const controlador = require('../controllers/index')

router.get('/categorias', controlador.CATEGORIA.listarCategorias)

module.exports = router