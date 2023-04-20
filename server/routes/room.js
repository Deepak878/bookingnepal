import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getrooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/:hotelid", verifyAdmin, createRoom);
//UPDAATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);
//Get ALL
router.get("/", getrooms);

export default router;
