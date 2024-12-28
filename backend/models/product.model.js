import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
},{
    timestamps :true, //to add createdat and updated at for every time
});
const Product= mongoose.model('Product',productSchema);
export default Product