import { List } from "../models/index.js";

// Crear una lista en un tablero
export const createList = async (req, res) => {
  try {
    const { title, boardId, position } = req.body
    if (!title || !boardId) {
      return res.status(400).json({ error: "El título y boardId son requeridos" })
    }

    const newList = await List.create({ title, boardId, position: position || 0 })
    res.status(201).json(newList)
  } catch (error) {
    res.status(500).json({ error: "Error al crear la lista" })
  }
};

// Actualizar una lista
export const updateList = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, position } = req.body

    const list = await List.findByPk(id)
    if (!list) {
      return res.status(404).json({ error: "Lista no encontrada" })
    }

    if (title !== undefined) list.title = title
    if (position !== undefined) list.position = position

    await list.save()
    res.json(list)
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la lista" })
  }
};

// Eliminar una lista
export const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await List.destroy({ where: { id } })

    if (!deleted) {
      return res.status(404).json({ error: "Lista no encontrada" })
    }

    res.json({ message: "Lista eliminada correctamente" })
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la lista" })
  }
};