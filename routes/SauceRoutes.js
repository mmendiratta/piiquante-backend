const express = require("express");

const router = express.Router();
const sauceController = require("../controllers/SauceController");

const auth = require("../middleware/auth");

router.get("/", auth, sauceController.getAllSauces);
router.get("/:id", auth, sauceController.getOneSauce);

router.post("/", auth, sauceController.createSauce);
router.post("/:id/like", auth, sauceController.setSauceLike);

router.put("/:id", auth,  sauceController.updateSauce);
router.delete("/:id", auth, sauceController.deleteSauce);

module.exports = router;
