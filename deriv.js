const express = require("express");
const cors = require("cors");
const { connectDeriv } = require("./services/deriv");
const { registerBot } = require("./services/botEngine");

const app = express();
app.use(cors());
app.use(express.json());

connectDeriv();

app.post("/bot/start", (req,res)=>{
  registerBot({
    name: req.body.name || "Bot",
    config: req.body.config || {over:5},
    running: true
  });

  res.json({status:"started"});
});

app.listen(5000, ()=> console.log("REAL SERVER RUNNING"));
