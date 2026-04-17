require("dotenv").config();  

const express = require("express");
const app = express();
const cors = require("cors");

require("./models/db");       // DB connect

const AuthRouters = require("./Routes/AuthRouters");
const ProductRouters = require("./Routes/ProductRouters");

app.use(express.json());
app.use(cors());

// routes
app.use("/auth", AuthRouters);
app.use("/products", ProductRouters);

app.get("/", (req, res) => {
    res.send("API Working ");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});