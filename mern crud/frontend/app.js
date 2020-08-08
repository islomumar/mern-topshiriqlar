const express = require('express')
const app = express()
const config = require('config')
const mongoose = require('mongoose')

const PORT = config.get('port') || 5000
async function start() {

}
app.listen(PORT, () => console.log(`${PORT} port ishga tushti`))