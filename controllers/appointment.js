const models = require('../database/models');

const createAppointment = async (req, res) => {
    try {
        const appointment = await models.Appointment.create(req.body);
        return res.status(201).json({
            appointment,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllAppointments = async (req, res) => {
    try {
        const appointments = await models.Appointment.findAll({
            include: [
                {
                    model: models.User,
                    as: 'users'
                },
                {
                    model: models.Place,
                    as: 'places'
                },
                {
                    model: models.Service,
                    as: 'services'
                }
            ]
        });
        return res.status(200).json({ appointments });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const updateAppointment = async (req, res) => {
    try {
        const { appointmentId } = req.params;
        
        const [updated] = await models.Appointment.update(req.body, {
            where: { id: appointmentId }
        });
        if (updated) {
            const updatedAppointment = await models.Appointment.findOne({ where: { id: appointmentId } });
            return res.status(200).json({ updatedAppointment });
        }
        throw new Error('Appointment not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteAppointment = async (req, res) => {
    try {
        const { appointmentId } = req.params;
        const deleted = await models.Appointment.destroy({
            where: { id: appointmentId }
        });
        if (deleted) {
            return res.status(200).send("Appointment deleted");
        }
        throw new Error("Appointment not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createAppointment,
    updateAppointment,
    getAllAppointments,
    deleteAppointment
}