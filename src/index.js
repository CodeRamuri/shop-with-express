const express = require('express')
const {PORT} = require('./config')

// Initializations
const app = express()

// Settings
app.set('port', PORT)

//Middlewares

// Routes
app.use(require('./index/routes'))
app.use(require('./shopping/routes'))
app.use(require('./signin/routes'))
app.use(require('./logout/routes'))
app.use(require('./signup/routes'))
app.use(require('./recover/routes'))
app.use('/productos', require('./products/routes'))
app.use('/pedidos', require('./orders/routes'))
app.use('/usuarios', require('./users/routes'))

app.listen(app.get('port'), () =>
{
  console.log('Server on port', app.get('port'))
})
