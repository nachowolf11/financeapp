const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { getMovements, createMovement, updateMovement, deleteMovement } = require('../controllers/movements');

const router = Router();

router.use( validarJWT );

// Obtener todos los movimientos
router.get('/', getMovements);

// Registrar movimiento
router.post('/', createMovement);

// Eliminar movimiento
router.delete('/:id', deleteMovement);

// Actualizar movimiento
router.put('/:id', updateMovement);

module.exports = router

