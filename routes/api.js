const router = require('express').Router();
const { getSearchItems } = require('../controllers/apiControllers')

router.get('/items', getSearchItems);

module.exports = router;