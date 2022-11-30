require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const reactViews = require("express-react-views")
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const logsController = require("./controllers/logController")

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  mongoose.connection.once("open", () => {
    console.log("connected to mongo")
  })
  


app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

app.use((req,res,next) => {
    console.log("middleware")
    next()
})

app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"))
app.use("/", logsController)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})