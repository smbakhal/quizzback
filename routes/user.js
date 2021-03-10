const { getUsers, createUser } = require('../controllers/user');
const router = require('express').Router();

router.get('/get', getUsers);
router.post('/create', createUser);

module.exports = router;