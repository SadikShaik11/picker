const { pickerService } = require("../services");

const createOrder = async (req, res) => {
  const response = await pickerService.createOrder(
    req.body.item_name,
    req.body.item_list,
    req.body.from_name,
    req.body.from_phone_number,
    req.body.from_address,
    req.body.from_pincode,
    req.body.to_name,
    req.body.to_phone_number,
    req.body.to_pincode,
    req.body.to_address,
    req.body.invoice_value,
    req.body.cod_amount
  );
  if (response == false) {
    res.status(400).json({
      status_code: 1106,
      err: "KYC not done. Please complete your KYC",
    });
  } else {
    res.status(200).json({ response });
  }
};
const checkAvailablity = async (req, res) => {
  const response = await pickerService.checkAvailablity(
    req.body.from_pincode,
    req.body.to_pincode
  );
  res.status(200).json({ response });
};

module.exports = {
  createOrder,
  checkAvailablity,
};
