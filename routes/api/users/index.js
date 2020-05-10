const express = require('express');
const router = express.Router();
 
const c = require('./users.controller')
 
router.get('/', c.findAll)
router.get('/:id', c.findById)
router.post('/',  c.insert)
router.put('/:id', c.updateById)
router.delete('/', c.remove)
router.delete('/:id', c.removeById)
 
module.exports = router;