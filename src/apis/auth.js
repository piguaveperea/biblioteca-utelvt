const router = require('express').Router()
const controller = require('../controllers/index')

router.post('/auth/crear_cuenta', controller.AUTH.CrearCuenta)
router.post('/auth/iniciar_sesion', controller.AUTH.IniciarSesion)
router.post('/auht/recuperar_clave',controller.AUTH.RecuperarClave)
router.put('/auth/cambiar_clave', controller.AUTH.CabiarClave)

module.exports = router