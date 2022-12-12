const express = require('express');
const router = express.Router();
const newConstroller = require('../app/controllers/NewsController');

router.use('/:slug', newConstroller.showDetails);
router.use('/', newConstroller.index);

module.exports = router;
