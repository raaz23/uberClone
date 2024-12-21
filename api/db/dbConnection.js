import { error } from "console";
import mongoose from "mongoose";


function connectToDB() {
    
    mongoose.connect(process.env.MONGODB_URL, {
        dbName: process.env.MONGODB,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("Database connected successfully");
    
    }).catch(err => console.log("Error connecting to database",err));   
}

  

export default connectToDB;