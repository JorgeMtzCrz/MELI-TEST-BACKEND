const router = require('express').Router();
const { getSearchItems, getItem } = require('../controllers/apiControllers')
const { catchErrors } = require("../middlewares/index")

router.get('/items', catchErrors(getSearchItems))
router.get('/items/:id', catchErrors(getItem))

module.exports = router;