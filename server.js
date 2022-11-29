require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const reactViews = require("express-react-views")
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const Log = require("./models/logs")

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



app.get("/", (req,res) => {
    Log.find({}, (error,allLogs) => {
        if(!error){
            res
            .status(200)
            .render("Index", {
                logs: allLogs
            })
        }else{
            res
            .status(400)
            .send(error)
        }
    })
})

//NEW
app.get("/new", (req,res) => {
    res.render("New")
})

//DELETE
app.delete("/:id", (req,res) => {
    Log.findByIdAndDelete(req.params.id, (err,data) => {
        res.redirect("/")
    })
})

//CREATE
app.post("/", (req,res) => {
    if(req.body.shipIsBroken === "true"){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    Log.create(req.body, (error, createdLog) => {
        if(!error){
            res
            .status(200)
            .redirect("/")
        } else {
            res
            .status(400)
            .send(error)
        }
    })
})

//SHOW
app.get("/:id", (req,res) => {
    Log.findById(req.params.id, (error,readLog) => {
        if(!error) {
            res
            .status(200)
            .render("Show",{
                log: readLog
            })
        } else {
            res
            .status(400)
            .send(error)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})