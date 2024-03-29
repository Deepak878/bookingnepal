import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
//role based authentication
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you are logged in and you can delte your account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello admin, you are logged in and you can delte all accounts");
// });
//UPDAATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//Get ALL
router.get("/", verifyAdmin, getUsers);
export default router;
