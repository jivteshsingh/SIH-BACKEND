const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./Middlewares/DB");
const userRoutes = require("./Routes/userRoutes");
const paymentRoutes = require("./Routes/paymentRoutes");
const tenderRoutes = require("./Routes/tenderRoutes");

dotenv.config();
connectDB();

app.use(express.json());

app.use('/api/user',userRoutes);
app.use('/api/payment',paymentRoutes);
app.use('/api/tender',tenderRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT,console.log(`Server is running on port ${PORT}.`));