const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users.route');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 


app.use("/users",usersRouter);


//home routes
app.get('/',(req,res)=>{
     res.sendFile(__dirname+ "/views/index.html")

})

//invalid routes
app.use((req,res)=>{
     res.status(500).json({
          message: "Something broke!!",
          statuscCode: "500!"
     })

})




module.exports = app;