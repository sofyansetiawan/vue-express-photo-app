require('dotenv').config()

const express = require('express')
const router = require('./routers/index')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
const port = 3000

app.use(cors())
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})