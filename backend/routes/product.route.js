import express from 'express';
const router=express.Router();
import Product from '../models/product.model.js'

// get data
router.get('/', async (req, res) => {
    const { id } = req.params
    try {
        const products=await Product.find({});
        res.status(200).json({
            success:true,
            data:products
        })cd
        
    } catch (error) {
console.log("error while retrieving data");
res.status(500).json({
    success:false,
message:"Server Error"
})
    }
})

// create data
router.post('/', async (req, res) => {
    const product = req.body; //user passed value in request
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({
            success: false,
            message: "Kindly fill all requried fields"
        });
    }
    const newProdcut = new Product(product);
    try {
        await newProdcut.save();
        return res.status(201).json({
            success: true,
            data: newProdcut
        })
    } catch (error) {
        console.error("Error in creating", error.message),
            res.status(500).json({
                success: false,
                message: "Server Error"
            })
    }
})

//delete data
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Deleted Successfully"
        })
    } catch (error) {
res.status(404).json({
    success:false,
    message:"Product not found"
})
    }
})

//update 
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const products=req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({
            success:false,
            message:"Invalid Product Id"
        })
    }
    try {
      const updatedProduct=  await Product.findByIdAndUpdate(id,products,{new:true})
        res.status(200).json({
            success: true,
            data: updatedProduct
        })
    } catch (error) {
res.status(500).json({
    success:false,
    message:"Server Error"
})
    }
})


export default router;
