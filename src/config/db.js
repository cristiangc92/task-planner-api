import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false // Para que no se llene la consola con logs SQL muy largos
})

export const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("Conexion exitosa a la base de datos")
    } catch (error) {
        console.error("Error al conectar a la base de datos: ", error)
    }
}