const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>
{
  res.send('INDEX - Estas en la tienda virtual')
})

module.exports = router
