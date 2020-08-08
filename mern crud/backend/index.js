const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`mongodb ga ulandi`))
    .catch(err => console.log(`mongodb ga ulanishda hatolik yuz berdi`, err))

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/api', require('./router/index'))

const port = 8000
app.listen(port, () => console.log(`${port} portni eshitishni boshladi`))