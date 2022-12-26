const { Router } = require('express');
const controllers = require('../controllers/service');

const router = Router();


router.post('/', controllers.createService);
router.get('/', controllers.getAllService);
router.put('/:serviceId', controllers.updateService);
router.delete('/:serviceId', controllers.deleteService);



module.exports = router;