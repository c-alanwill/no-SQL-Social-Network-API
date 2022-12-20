const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

// http://localhost:3001/api/users
router.use('/users', userRoutes);

// http://localhost:3001/api/thoughts
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
