const { Router } = require('express');
const controllers = require('../controllers/appointment');

const router = Router();


router.post('/', controllers.createAppointment);
router.get('/', controllers.getAllAppointments);
router.put('/:appointmentId', controllers.updateAppointment);
router.delete('/:appointmentId', controllers.deleteAppointment);



module.exports = router;