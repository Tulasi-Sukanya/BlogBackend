const express = require('express');
const home=require("./routes/Home");
const bollywood=require("./routes/Bollywood");
const hollywood = require("./routes/Hollywood");
const food=require("./routes/Food");
const fitness=require("./routes/Fitness");
const technology=require("./routes/Technology");

const app = express();
const cors=require('cors');

app.use(cors({origin:"*"}));
app.use("/",home);
app.use("/",bollywood);
app.use("/",hollywood);
app.use("/",food);
app.use("/",fitness);
app.use("/",technology);

app.listen(process.env.PORT || 4009,()=>{
    console.log("Backend Server running at port 4009...");
})