const express = require('express')
const app = express()
const port = 3333
const cors = require("cors");


app.use(cors());
app.options("*", cors());
require('dotenv').config()

app.use(express.json())

const vehicleRouter = require("./routes/vehicleRoute")

app.use("/veiculos", vehicleRouter)

app.get('/', (req, res) => {
  res.send('Backend do teste fullstack 4.events.')
})


app.listen(process.env.PORT || port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})