const { Router } = require('express');
const controllers = require('../controllers/places');

const router = Router();

router.post('/', controllers.createPlace);
router.get('/', controllers.getAllPlaces);
router.put('/:placeId', controllers.updatePlace);
router.delete('/:placeId', controllers.deletePlace);



module.exports = router;