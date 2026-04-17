const Product = require("../models/Product");

// CREATE PRODUCT
const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();

        res.json({
            success: true,
            message: "Product created",
            data: product
        });

    } catch (error) {
        res.json({
            success: false,
            message: "Error creating product"
        });
    }
};

//  GET ALL PRODUCTS
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.json({
            success: true,
            data: products
        });

    } catch (error) {
        res.json({
            success: false,
            message: "Error fetching products"
        });
    }
};

//  DELETE PRODUCT
const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Product deleted"
        });

    } catch (error) {
        res.json({
            success: false,
            message: "Error deleting product"
        });
    }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!product) {
            return res.json({
                success: false,
                message: "Product not found"
            });
        }

        res.json({
            success: true,
            message: "Product updated",
            data: product
        });

    } catch (error) {
        res.json({
            success: false,
            message: "Error updating product"
        });
    }
};

// EXPORT ALL
module.exports = {  createProduct,getProducts,deleteProduct,updateProduct};