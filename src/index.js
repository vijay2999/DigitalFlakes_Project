const express = require("express");
const route = require("./routes/routes.js")
const mongoose = require("mongoose")
const app = express()
const multer = require ("multer")

mongoose.set('strictQuery', true)
app.use(express.json())

app.use(multer().any())

mongoose.connect("mongodb+srv://vijay45:brothersinblood@vijay45.vnrkkph.mongodb.net/vijay45-DB",
{useNewUrlParser:true})

.then(()=> console.log("MongoDb is connected"))
.catch (err => console.log(err))

app.use('/',route);

app.use(function (req, res) {
    var err = new Error("Not Found.")
    err.status = 404
    return res.status(404).send({ status: "404", msg: "Invalid http request" })
  })

app.listen( 3000 ,function() {
    console.log("Express app running on port" + (process.env.PORT || 3000))
});