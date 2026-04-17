const router = require("express").Router();

const {
    createProduct,
    getProducts,
    deleteProduct,
    updateProduct
} = require("../controllers/ProductController");

// CREATE
router.post("/add", createProduct);

//  READ
router.get("/", getProducts);

//  DELETE
router.delete("/:id", deleteProduct);

//  UPDATE
router.put("/:id", updateProduct);

module.exports = router;