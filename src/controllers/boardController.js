import { Board, List, Card } from "../models/index.js";

//Obtener todos los tableros
export const getBoards = async (req, res) => {
    try {
        const boards = await Board.findAll({
            order: [["createdAt", "DESC"]]
        })
        res.json(boards)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los tableros" })
    }
}

//Obtener un tablero por ID
export const getBoardById = async (req, res) => {
    try {
        const { id } = req.params
        const board = await Board.findByPk(id, {
            include: {
                model: List,
                include: Card
            },
            order: [
                [List, "position", "ASC"],
                [List, Card, "position", "ASC"]
            ]
        })

        if(!board){
            return res.status(404).json({ error: "Tablero no encontrado" })
        }

        res.json(board)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el detalle del tablero" })
    }
}

//Crear un nuevo tablero
export const createBoard = async (req, res) => {
    try {
        const { title } = req.body
        if(!title){
            return res.status(400).json({ error: "El título es requerido" })
        }

        const newBoard = await Board.create({ title })
        res.status(201).json(newBoard)
    } catch (error) {
        res.status(500).json({ error: "Error al crear el tablero" })
    }
}

//Eliminar un tablero
export const deleteBoard = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Board.destroy({ where: { id } })

    if (!deleted) {
      return res.status(404).json({ error: "Tablero no encontrado" })
    }

    res.json({ message: "Tablero eliminado correctamente" })
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el tablero" })
  }
}

