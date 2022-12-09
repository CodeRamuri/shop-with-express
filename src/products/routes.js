const express = require('express')
const router = express.Router()
const path = require('path')

// This is page list products
router.get('/', (req, res) =>
{
  res.send('PRODUCTOS - Estas en la pagina de lista de los productos')
})

// This is page add products
router.get('/agregar', (req, res) =>
{
  res.send('AGREGAR PRODUCTOS - Estas en la pagina de agregar productos')
})

// This is page edit products
router.get('/editar', (req, res) =>
{
  res.send('EDITAR PRODUCTOS - Estas en la pagina de editar productos')
})

// This is page delete products
router.get('/eliminar', (req, res) =>
{
  res.send('ELIMINAR PRODUCTOS - Estas en la pagina de editar productos')
})

// Public
router.use(express.static(path.join(__dirname, 'public')));

module.exports = router
