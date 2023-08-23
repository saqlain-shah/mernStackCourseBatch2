import express from "express";
import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://mjaffer720:Jaffer123@cluster0.nxydjib.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
    console.log("Backend connected")
} catch {
    console.log("error");
}

let db = conn.db("sample_training");

export default db;

const app = express();


app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});

