import express from "express";
import dotenv from "dotenv";
dotenv.config()
import { getHealth } from "./controllers/health.js";
import { postPlant, getPlant,getPlantId, putPlantId,deletePlantId } from "./controllers/plant.js";
import { error } from "./controllers/error.js";
import mongoose from "mongoose";
import cors from "cors"

const app= express()
app.use(cors())
app.use(express.json())

const dbConnection = async ()=>{
    const conn = await mongoose.connect(process.env.MONGOURL)

    if(conn){
        console.log("MongoDB connected")
    }
    else{
        console.log("MongoDB not connected")
    }
}

dbConnection();

app.get("/health", getHealth)

app.post("/plant", postPlant)

app.get("/plants", getPlant)

app.get("/plant/:id",getPlantId)

app.put("/plant/:id",putPlantId)

app.delete("/plant/:id",deletePlantId)

app.use("*", error)

const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`)
})

