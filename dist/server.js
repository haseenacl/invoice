"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const swagger_1 = require("./config/swagger");
const db_1 = __importDefault(require("./config/db")); // ✅ Import your DB connection
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ✅ Swagger docs
(0, swagger_1.setupSwagger)(app);
// ✅ Connect to MongoDB Atlas
(0, db_1.default)(); // ✅ this will connect using your MONGO_URI
// ✅ Routes
const invoiceroutes_1 = __importDefault(require("./routes/invoiceroutes"));
app.use("/api/invoices", invoiceroutes_1.default);
// ✅ Default route (home)
app.get("/", (req, res) => {
    res.send("🚀 Invoice API is running successfully on Render!");
});
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
//# sourceMappingURL=server.js.map