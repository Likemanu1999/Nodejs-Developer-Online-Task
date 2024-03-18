const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("../src/Route/route")
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
mongoose.connect("mongodb://localhost:27017/Task",{
    useNewUrlParser: true
})

.then(()=> console.log("mongoodb is connected"))
.catch(err => console.log(err))

app.use('/',route)
app.listen(process.env.PORT || 3000, function () {
    console.log(`Express app is running on port `+ (process.env.PORT || 3000))
})