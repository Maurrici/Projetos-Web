import express from "express";
import HomeController from "../src/controllers/HomeController";

var router = express.Router();

router.get('/', HomeController.index);

export default router;