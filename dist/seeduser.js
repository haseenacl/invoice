"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const User_1 = __importDefault(require("./models/User"));
dotenv_1.default.config();
const seedUser = async () => {
    try {
        await (0, db_1.default)();
        const newUser = await User_1.default.create({
            name: "Test User",
            email: "testuser@example.com",
        });
        console.log("✅ User seeded successfully:", newUser);
        process.exit();
    }
    catch (error) {
        console.error("❌ Error seeding user:", error);
        process.exit(1);
    }
};
seedUser();
//# sourceMappingURL=seeduser.js.map