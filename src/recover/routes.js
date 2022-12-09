const express = require('express')
const router = express.Router()

router.get('/recuperar', (req, res) =>
{
  res.send('RECUPERAR - Estas en la pagina recuperar')
})

module.exports = router
