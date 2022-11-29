const express = require("express")
const app = express()
const PORT = 3000
const reactViews = require("express-react-views")

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

app.use((req,res,next) => {
    next()
})

app.use(express.urlencoded({extended: false}))

app.get("/new", (req,res) => {
    res.render("New")
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})