import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = async () => {
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-2ificys-shard-00-00.cxwx7ly.mongodb.net:27017,ac-2ificys-shard-00-01.cxwx7ly.mongodb.net:27017,ac-2ificys-shard-00-02.cxwx7ly.mongodb.net:27017/?ssl=true&replicaSet=atlas-53zmr4-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
     await mongoose.connect(URL, { useUnifiedTopology: true});
    console.log('Database Connected Succesfully');
  }
catch(error) 
{
    console.log('Error: ', error.message);
}
};

 export default Connection;