import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './configs/db.js';
import productRoutes from './routes/product.route.js'

const app = express();
dotenv.config();
app.use(express.json()); //allow us to accept json data in the req.body

app.use("/api/products",productRoutes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at PORT ${PORT}`);
})

// mongodb+srv://laibanasir0611:s6nln8rgeliBu7j4@cluster.5k57f.mongodb.net/?retryWrites=true&w=majority&appName=cluster

