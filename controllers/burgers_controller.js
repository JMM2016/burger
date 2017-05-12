/**
 * Created by Miguel on 5/11/2017.
 */
const express = require('express')
//const burger = require('../models/burger.js')

const router = express.Router()

router.get("/", function(req, res) {
  res.render("index")

  // burger.all( data => {
  //   let hbsObj = {
  //     burgers: data
  //   }
  //   console.log(hbsObj)
  //   res.render("index", hbsObj)
  // })
})


module.exports = router

