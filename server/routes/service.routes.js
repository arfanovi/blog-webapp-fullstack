const express = require('express');
const router = express.Router();
const {
  createService,
  getServices,
  getService,
  editService,
  deleteService
} = require('../controllers/service.controller');

const authMiddleware = require('../middleware/auth.middleware');

router.post('/', authMiddleware, createService);
router.get('/', getServices);
router.get('/:id', getService);
router.patch('/:id', authMiddleware, editService);
router.delete('/:id', authMiddleware, deleteService);

module.exports = router;
