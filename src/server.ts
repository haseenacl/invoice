import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { setupSwagger } from "./config/swagger";
import connectDB from "./config/db"; // ✅ Import your DB connection

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Swagger docs
setupSwagger(app);

// ✅ Connect to MongoDB Atlas
connectDB();  // ✅ this will connect using your MONGO_URI

// ✅ Routes
import invoiceRoutes from "./routes/invoiceroutes";
app.use("/api/invoices", invoiceRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
