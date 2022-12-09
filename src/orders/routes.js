const express = require('express')
const router = express.Router()

// This is page list orders
router.get('/', (req, res) =>
{
  res.send('PEDIDOS - Estas en la pagina de lista de los pedidos')
})

// This is page add orders
router.get('/agregar', (req, res) =>
{
  res.send('AGREGAR PEDIDOS - Estas en la pagina de agregar pedidos')
})

// This is page edit orders
router.get('/editar', (req, res) =>
{
  res.send('EDITAR PEDIDOS - Estas en la pagina de editar pedidos')
})

// This is page delete orders
router.get('/eliminar', (req, res) =>
{
  res.send('ELIMINAR PEDIDOS - Estas en la pagina de editar pedidos')
})

module.exports = router
