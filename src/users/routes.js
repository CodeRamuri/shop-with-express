const express = require('express')
const router = express.Router()
const path = require('path')

// This is page list users
router.get('/', (req, res) =>
{
  res.send('USUARIOS - Estas en la pagina de lista de los usuarios')
})

// This is page add users
router.get('/agregar', (req, res) =>
{
  res.send('AGREGAR USUARIOS - Estas en la pagina de agregar usuarios')
})

// This is page edit users
router.get('/editar', (req, res) =>
{
  res.send('EDITAR USUARIOS - Estas en la pagina de editar usuarios')
})

// This is page delete users
router.get('/eliminar', (req, res) =>
{
  res.send('ELIMINAR USUARIOS - Estas en la pagina de editar usuarios')
console.log(path.join(__dirname, 'public'))
})

// Public
router.use(express.static(path.join(__dirname, 'public')));

module.exports = router
