const express = require('express')
const router = express.Router()

router.get('/registro', (req, res) =>
{
  res.send('REGISTRO - Estas en la pagina registro')
})

module.exports = router
