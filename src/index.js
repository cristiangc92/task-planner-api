import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { sequelize, connectDB } from "./config/db.js"
import "./models/index.js" //Cargar las relaciones

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

//Middlewares
app.use(cors())
app.use(express.json())

//Ruta de prueba
app.get("/api/prueba", (req, res) => {
    res.json({status: "ok", message: "Servidor funcionando correctamente"})
})

//Inicializar el servidor y base de datos
const startServer = async () => {
    await connectDB()
    //sync({ alter: true }) crea las tablas si no existen en la DB
    await sequelize.sync({ alter: true });
    console.log("Modelos sincronizados con PostgreSQL")
    
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto: ${PORT}`)
    })
}

startServer()