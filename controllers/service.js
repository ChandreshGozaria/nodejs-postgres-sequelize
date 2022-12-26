const models = require('../database/models');

const createService = async (req, res) => {
    try {

        const service = await models.Service.create(req.body);
        return res.status(201).json({
            service,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllService = async (req, res) => {
    try {
        const services = await models.Service.findAll({
            include: [
                {
                    model: models.Place,
                    as: 'places',
                    include: [
                        {
                            model: models.User,
                            as: 'users',
                        },
                    ]
                }
            ]
        });
return res.status(200).json({ services });
    } catch (error) {
    return res.status(500).send(error.message);
}
};

const updateService = async (req, res) => {
    try {
        const { serviceId } = req.params;

        const [updated] = await models.Service.update(req.body, {
            where: { id: serviceId }
        });
        if (updated) {
            const updatedService = await models.Service.findOne({ where: { id: serviceId } });
            return res.status(200).json({ updatedService });
        }
        throw new Error('Service not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteService = async (req, res) => {
    try {
        const { serviceId } = req.params;
        const deleted = await models.Service.destroy({
            where: { id: serviceId }
        });
        if (deleted) {
            return res.status(200).send("Service deleted");
        }
        throw new Error("Service not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createService,
    updateService,
    getAllService,
    deleteService
}