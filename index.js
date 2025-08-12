import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./utils/db.js";
import { v2 as cloudinary } from "cloudinary";
import cors from "cors";
import axios from "axios";

dotenv.config();

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const app = express();

const url = `https://eccomerse-1-ur4x.onrender.com`;
const interval = 30000;

function reloadWebsite() {
    axios
        .get(url)
        .then((response) => {
            console.log("website reloded");
        })
        .catch((error) => {
            console.error(`Error : ${error.message}`);
        });
}

setInterval(reloadWebsite, interval);


app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("He;;;o");
})

const port = process.env.PORT;


import userRouter from "./routes/user.js"
import ProductRouter from "./routes/product.js"
import cartRouter from "./routes/cart.js"
import addressRouter from "./routes/address.js"
import orderRoutes from "./routes/order.js";

app.use("/api", userRouter);
app.use("/api", ProductRouter);
app.use("/api", cartRouter);
app.use("/api", addressRouter);
app.use("/api", orderRoutes);

app.listen(port, () => {
    console.log(`server is running on https://localhost:${port}`)
    connectDb();
})

//https://dashboard.stripe.com/test/dashboard