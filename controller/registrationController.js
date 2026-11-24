const Registration = require("../model/registrationModel");

const registerCustomer = async (req, res) => {
  try {
    const {
      name,
      mobile,
      address,
      mealPreference,
      startDate,
    } = req.body || {};

    // Validation
    if (
      !name ||
      !mobile ||
      !address ||
      !mealPreference ||
      !startDate
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid 10 digit mobile number",
      });
    }

    if (!["Lunch", "Dinner", "Both"].includes(mealPreference)) {
      return res.status(400).json({
        success: false,
        message: "Invalid meal preference",
      });
    }

    // Calculate price on backend
    const price = mealPreference === "Both" ? 2499 : 1499;

    // Save registration in MongoDB
    const registration = await Registration.create({
      name,
      mobile,
      address,
      mealPreference,
      price,
      startDate,
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      data: registration,
    });

  } catch (error) {
    console.error("Registration Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { registerCustomer };