const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought
} = require('../../controllers/thoughtsController');

// /api/users
router.route('/').get(getThought)
                  .post(createThought);

// /api/users/:userId
router.route('/:userId').get(getSingleThought).put(updateThought)
                .delete(deleteThought);



module.exports = router;
