import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const  Connection = () => {
 
    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-s6q2lsa-shard-00-00.ljvw1iv.mongodb.net:27017,ac-s6q2lsa-shard-00-01.ljvw1iv.mongodb.net:27017,ac-s6q2lsa-shard-00-02.ljvw1iv.mongodb.net:27017/?ssl=true&replicaSet=atlas-n8oepm-shard-0&authSource=admin&retryWrites=true&w=majority`
    
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database Connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Database disconnected");
    })

    mongoose.connection.on('error', () =>{
        console.log("Error while connecting with Databse", error.message);
    })

}

export default Connection;