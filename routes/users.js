const { Router } = require('express');
const controllers = require('../controllers/users');

const router = Router();


router.post('/', controllers.createUser);
router.get('/', controllers.getAllUsers);
router.put('/:userId', controllers.updateUser);
router.delete('/:userId', controllers.deleteUser);



module.exports = router;