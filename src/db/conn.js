const mongoose=require('mongoose');
const dotenv = require('dotenv')
// mongoose.connect("mongodb://localhost:27017/adlogin").then(()=>{console.log("Connection is established")});


dotenv.config();

mongoose.connect("mongodb+srv://knzdb:knzdb@cluster0.pcghd.mongodb.net/knzdb?retryWrites=true&w=majority")    
    .then(() => console.log(" Mongoose is connected"))
  