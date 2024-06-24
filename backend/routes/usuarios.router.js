const express = require('express');
const router = express.Router();
//const cors = require('cors');
//router.use(cors());
const controller = require('../controllers/usuarios.controller');

// Prefijo: /usuarios

router.get('/', controller.index);
router.get('/:email', controller.getUser);
router.get('/:id', controller.show);
router.post('/', controller.store);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
