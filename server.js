const express = require("express")
const app = express()
const PORT = 3000
const reactViews = require("express-react-views")

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

app.use((req,res,next) => {
    console.log("middleware")
    next()
})

app.use(express.urlencoded({extended:false}))

app.get("/logs", (req,res) => {
    res.send("hello")
})

//NEW
app.get("/new", (req,res) => {
    res.render("New")
})

//CREATE
app.post("/logs", (req,res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})