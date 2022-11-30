const express = require("express")
const router = express.Router()
const Log = require("../models/logs")


//INDEX
router.get("/", (req,res) => {
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
router.get("/new", (req,res) => {
    res.render("New")
})

//DELETE
router.delete("/:id", (req,res) => {
    Log.findByIdAndDelete(req.params.id, (err,data) => {
        res.redirect("/")
    })
})

//UPDATE
router.put("/:id", (req,res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === "true" ? true : false
    Log.findByIdAndUpdate(req.params.id, req.body, (err,updatedLog) => {
        if(!err){
            res
            .status(200)
            .redirect(`/${req.params.id}`)
        } else {
            res
            .status(400)
            .send(err)
        }
    })
})

//CREATE
router.post("/", (req,res) => {
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

//EDIT
router.get("/:id/edit", (req,res) => {
    Log.findById(req.params.id, (err,readLog) => {
        if(!err) {
            res
            .status(200)
            .render("Edit", {log: readLog})
        } else {
            res
            .status(400)
            .send({mes:err.message})
        }
    })
})

//SHOW
router.get("/:id", (req,res) => {
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

module.exports = router