const router = require('express').Router()
const controlador = require('../controllers/index')
router.get('/v1/detalle_libro', controlador.DETALLE.DetalleLibros)

module.exports = router