require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes/route");
const apiRouter = require("./routes/api");
const { emoji } = require("conmaster.js");


app.use(indexRouter)
app.use("/api", apiRouter)


app.listen(process.env.PORT, () => 
console.info(`${emoji.happy3} API is up and running! You can now go to port ` 
+ process.env.PORT))