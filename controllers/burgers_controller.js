/**
 * Created by Miguel on 5/11/2017.
 */
const express = require('express')
const burger = require('../models/burger.js')

const router = express.Router()

console.log("burgers-ctlr.js")

router.get("/", function(req, res) { // can be anon fun?
  res.render("index")

  // burger.readAll( data => {
  //    let hbsObj = {
  //      burgers: data
  //    }
  //    console.log(hbsObj)
  //    res.render("index", hbsObj)
  // })
})

router.post("/", function(req, res) {			
	burger.create([
		"burger_name", "devoured"
	], [
		param.body.name, param.body.devoured
	], () => {
     console.log("post: " + param.body)
     res.render("index") // Or: res.redirect("/")
  })	
})

router.put("/:id", function(req, res) {
	const condition = "id = " + req.params.id	
	
	burger.update({
		burger_name: req.params.name,
		devoured: req.params.devoured		// devoured sh/would also equal true here
		} , condition, () => {
     console.log("put: " + param.body)
     res.render("index") // Or: res.redirect("/")
  })
})

module.exports = router

