const Express = require("express");
const router = Express.Router();
const pickr = require("./pickerroute");
router.use("/pickr", pickr);
module.exports = router;
