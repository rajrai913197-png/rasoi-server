const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
   name: String,

  mobile: String,

  address: String,

  mealPreference: String,

  startDate: Date,

  plan: String,

  price: Number
  }
);

const Registration = mongoose.model(
  "Registration",
  registrationSchema
);

module.exports = Registration;