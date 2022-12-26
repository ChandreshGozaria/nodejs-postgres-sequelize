const { Router } = require('express');
const controllers = require('../controllers/reviews');

const router = Router();


router.post('/', controllers.createReview);
router.get('/', controllers.getAllReviews);
router.put('/:reviewId', controllers.updateReview);
router.delete('/:reviewId', controllers.deleteReview);



module.exports = router;