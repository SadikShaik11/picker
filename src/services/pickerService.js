const axios = require("axios");
const createOrder = async (
  item_name,
  item_list,
  from_name,
  from_phone_number,
  from_address,
  from_pincode,
  to_name,
  to_phone_number,
  to_pincode,
  to_address,
  invoice_value,
  cod_amount
) => {
  const response = await axios
    .post(`https://www.pickrr.com/api/place-order/`, {
      auth_token: process.env.TOKEN,
      item_name,
      item_list,
      from_name,
      from_phone_number,
      from_address,
      from_pincode,
      to_name,
      to_phone_number,
      to_pincode,
      to_address,
      invoice_value,
      cod_amount,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return false;
    });
  return response;
};
const checkAvailablity = async (from_pincode, to_pincode) => {
  const response = await axios.get(
    `https://www.pickrr.com/api/check-pincode-service/?from_pincode=${from_pincode}&to_pincode=${to_pincode}&auth_token=${process.env.TOKEN}`
  );
  return response.data;
};
module.exports = {
  createOrder,
  checkAvailablity,
};
