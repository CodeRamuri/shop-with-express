const express = require('express')
const router = express.Router()

router.get('/salir', (req, res) =>
{
  res.send('SALIR - Estas en la pagina salir')
})

module.exports = router
