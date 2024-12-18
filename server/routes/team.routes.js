const express = require('express');
const router = express.Router();
const {
  createTeamMember,
  getTeamMembers,
  getTeamMember,
  editTeamMember,
  deleteTeamMember
} = require('../controllers/team.controller');

const authMiddleware = require('../middleware/auth.middleware');

router.post('/', authMiddleware, createTeamMember);
router.get('/', getTeamMembers);
router.get('/:id', getTeamMember);
router.patch('/:id', authMiddleware, editTeamMember);
router.delete('/:id', authMiddleware, deleteTeamMember);

module.exports = router;
