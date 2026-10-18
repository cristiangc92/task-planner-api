import { Router } from "express";
import { getBoards, getBoardById, createBoard, deleteBoard } from "../controllers/boardController.js"

const router = Router()

router.get("/", getBoards)
router.get("/:id", getBoardById)
router.post("/", createBoard)
router.delete("/:id", deleteBoard)

export default router