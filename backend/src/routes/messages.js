const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const messageController = require('../controllers/messageController');

// Validaciones
const validarMensaje = [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('message').trim().notEmpty().withMessage('Message is required')
];

// Rutas públicas
router.post('/', validarMensaje, messageController.sendMessage);

// Rutas protegidas (para administrar mensajes desde el frontend)
// ⚠️ En producción, ¡deberías agregar autenticación aquí!
router.get('/', messageController.obtainMessage);
router.patch('/:id/read', messageController.markAsRead);

module.exports = router;