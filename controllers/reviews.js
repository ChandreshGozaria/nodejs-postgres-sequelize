const models = require('../database/models');

const createReview = async (req, res) => {
    try {
        const review = await models.Review.create(req.body);
        return res.status(201).json({
            review,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllReviews = async (req, res) => {
    try {
        const reviews = await models.Review.findAll({
            include: [
                {
                    model: models.Place,
                    as: 'places',
                },
                {
                    model: models.User,
                    as: 'users',
                },
                {
                    model: models.Service,
                    as: 'services',
                }
            ]
        });
        return res.status(200).json({ reviews });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const updateReview = async (req, res) => {
    try {
        const { reviewId } = req.params;

        const [updated] = await models.Review.update(req.body, {
            where: { id: reviewId }
        });
        if (updated) {
            const updatedReview = await models.Review.findOne({ where: { id: reviewId } });
            return res.status(200).json({ review: updatedReview });
        }
        throw new Error('Review not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const deleted = await models.Review.destroy({
            where: { id: reviewId }
        });
        if (deleted) {
            return res.status(200).send("Review deleted");
        }
        throw new Error("Review not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createReview,
    updateReview,
    getAllReviews,
    deleteReview
}