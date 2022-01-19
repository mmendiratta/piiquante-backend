const express = require("express");

const router = express.Router();
const sauceController = require("../controllers/SauceController");

// const auth = require('..')

router.get("/", sauceController.getAllSauces);
router.get("/:id", sauceController.getOneSauce);

router.post("/", sauceController.createSauce);
router.post("/:id/like", sauceController.setSauceLike);

router.put("/:id", sauceController.updateSauce);
router.delete("/:id", sauceController.deleteSauce);

module.exports = router;