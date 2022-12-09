const express = require('express')
const router = express.Router()

router.get('/carrito', (req, res) =>
{
  res.send('CARRITO - Estas en la pagina del carrito')
})

module.exports = router
