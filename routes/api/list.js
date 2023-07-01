const express = require('express')
const router = express.Router()
const listCtrl = require('../../controllers/api/list')

router.post('/', listCtrl.indexList)
router.get('/', listCtrl.getList)

module.exports = router