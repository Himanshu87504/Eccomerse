import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { addAddress, deleteAddress, getAllAddresss, getSingleAddress } from "../controller/address.js";

const router = express.Router();

router.post("/address/new", isAuth, addAddress);
router.get("/address/all", isAuth, getAllAddresss);
router.get("/address/:id", isAuth, getSingleAddress)
router.delete("/address/:id", isAuth, deleteAddress)



export default router;