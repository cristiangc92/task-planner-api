import { Card } from "../models/index.js";

// Crear una tarjeta en una lista
export const createCard = async (req, res) => {
  try {
    const { title, description, listId, position } = req.body
    if (!title || !listId) {
      return res.status(400).json({ error: "El título y listId son requeridos" })
    }

    const newCard = await Card.create({
      title,
      description,
      listId,
      position: position || 0,
    });

    res.status(201).json(newCard)
  } catch (error) {
    res.status(500).json({ error: "Error al crear la tarjeta" })
  }
}

// Actualizar una tarjeta
export const updateCard = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, listId, position } = req.body

    const card = await Card.findByPk(id);
    if (!card) {
      return res.status(404).json({ error: "Tarjeta no encontrada" })
    }

    if (title !== undefined) card.title = title
    if (description !== undefined) card.description = description
    if (listId !== undefined) card.listId = listId
    if (position !== undefined) card.position = position

    await card.save()
    res.json(card)
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la tarjeta" })
  }
};

// Eliminar una tarjeta
export const deleteCard = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Card.destroy({ where: { id } })

    if (!deleted) {
      return res.status(404).json({ error: "Tarjeta no encontrada" })
    }

    res.json({ message: "Tarjeta eliminada correctamente" })
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la tarjeta" })
  }
}