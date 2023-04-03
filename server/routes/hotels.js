import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  countByCity,
  countByType,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { getHotel, getHotels } from "../controllers/hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//Create
router.post("/", verifyAdmin, createHotel);
//UPDAATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/find/:id", getHotel);
//Get ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
