const express = require('express')
const router = express.Router()

router.get('/entrar', (req, res) =>
{
  res.send('ENTRAR - Estas en la pagina entrar')
})

module.exports = router
