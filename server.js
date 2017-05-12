const express = require("express")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")

const svr = express()

const PORT =  process.env.PORT || 3000

svr.use(bodyParser.urlencoded({ extended: false }))

// Serve static content for the app from the "public" directory in the application directory.
svr.use(express.static(process.cwd() + "/public"))

// Override with POST having ?_method=DELETE
svr.use(methodOverride("_method"))


// Set Handlebars.
const expresshandlebars = require("express-handlebars")

svr.engine("handlebars", expresshandlebars({ defaultLayout: "main" }))
svr.set("view engine", "handlebars")

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js")
svr.use("/", routes)

// Starts the server to begin listening
svr.listen (PORT, () => {
  console.log("Server listening on PORT " + PORT)
})