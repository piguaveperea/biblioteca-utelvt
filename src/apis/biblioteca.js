const router = require('express').Router()
const controlador = require('../controllers/index')

router.get('/biblibliotecas' , controlador.BIBLIOTECA.Listar) 

module.exports = router