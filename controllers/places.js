const models = require('../database/models');

const createPlace = async (req, res) => {
    try {
        const place = await models.Place.create(req.body);
        return res.status(201).json({
            place,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllPlaces = async (req, res) => {
    try {
        const places = await models.Place.findAll({
            include: [
                {
                    model: models.User,
                    as: 'users'
                }
            ]
        });
        return res.status(200).json({ places });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const updatePlace = async (req, res) => {
    try {
        const { placeId } = req.params;
        
        const [updated] = await models.Place.update(req.body, {
            where: { id: placeId }
        });
        if (updated) {
            const updatedPlace = await models.Place.findOne({ where: { id: placeId } });
            return res.status(200).json({ place: updatedPlace });
        }
        throw new Error('Place not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deletePlace = async (req, res) => {
    try {
        const { placeId } = req.params;
        const deleted = await models.Place.destroy({
            where: { id: placeId }
        });
        if (deleted) {
            return res.status(200).send("Place deleted");
        }
        throw new Error("Place not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createPlace: createPlace,
    updatePlace,
    getAllPlaces,
    deletePlace
}