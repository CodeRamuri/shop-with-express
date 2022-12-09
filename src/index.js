const express = require('express')
const {PORT} = require('./config')

// Initializations
const app = express()

// Settings
app.set('port', PORT)

//Middlewares

// Routes
app.use(require('./routes'))
app.use(require('./routes/shopping'))
app.use(require('./routes/signin'))
app.use(require('./routes/logout'))
app.use(require('./routes/signup'))
app.use(require('./routes/recover'))
app.use('/productos', require('./routes/products'))
app.use('/pedidos', require('./routes/orders'))
app.use('/usuarios', require('./routes/users'))

app.listen(app.get('port'), () =>
{
  console.log('Server on port', app.get('port'))
})
