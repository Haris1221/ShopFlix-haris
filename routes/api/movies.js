const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies');

router.get('/', moviesCtrl.indexMovie)
router.get('/:movie', moviesCtrl.searchApi)

module.exports = router