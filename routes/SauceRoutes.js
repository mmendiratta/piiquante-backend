const express = require("express");

const router = express.Router();
const sauceController = require("../controllers/SauceController");

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.get("/", auth, sauceController.getAllSauces);
router.get("/:id", auth, sauceController.getOneSauce);

router.post("/", auth, multer, sauceController.createSauce);
router.post("/:id/like", auth, sauceController.setSauceLike);

router.put("/:id", auth, multer, sauceController.updateSauce);
router.delete("/:id", auth, sauceController.deleteSauce);

module.exports = router;
