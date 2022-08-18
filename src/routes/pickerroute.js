const Express = require("express");
const { pickerController } = require("../controllers");
const router = Express.Router();

router.route("/pincode-availablity").post(pickerController.checkAvailablity);
router.route("/create-order").post(pickerController.createOrder);

module.exports = router;
