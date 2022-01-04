const router = require('express').Router()
const middleware =require('../middlewares/index')
const controller = require('../controllers/index')

router.post('/pedir_libro',[middleware.TOKEN.verificarToken ], controller.LIBRO.PedirLibro)
router.put('/regresar_libro',[middleware.TOKEN.verificarToken ], controller.LIBRO.RegresarLibro)
router.get('/buscar_libro', controller.LIBRO.BuscarLibro)
router.post('/libro/v1/crear', [middleware.TOKEN.verificarToken], controller.LIBRO.CrearLibro)
module.exports = router
