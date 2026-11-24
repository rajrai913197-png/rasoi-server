const express = require("express");
const cors = require("cors");
require("./config/db");
const router = require("./router/registrationRoutes")
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});