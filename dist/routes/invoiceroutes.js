"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const invoicecontroller_1 = require("../controllers/invoicecontroller");
const router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Invoices
 *   description: API endpoints for managing invoices
 */
/**
 * @swagger
 * /invoices:
 *   post:
 *     summary: Create a new invoice
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user creating the invoice
 *               invoiceNumber:
 *                 type: string
 *                 description: Unique invoice number
 *               customerName:
 *                 type: string
 *                 description: Name of the customer
 *               customerEmail:
 *                 type: string
 *                 description: Email of the customer
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     quantity:
 *                       type: number
 *                     price:
 *                       type: number
 *               totalAmount:
 *                 type: number
 *               tax:
 *                 type: number
 *               discount:
 *                 type: number
 *               grandTotal:
 *                 type: number
 *               invoiceDate:
 *                 type: string
 *                 format: date
 *               dueDate:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *                 enum: [paid, pending, cancelled]
 *             example:
 *               userId: "6724b6a2c91b2f3e8b123456"
 *               invoiceNumber: "INV-2025-002"
 *               customerName: "Aisha Khan"
 *               customerEmail: "aisha.khan@example.com"
 *               products:
 *                 - name: "Bluetooth Speaker"
 *                   quantity: 1
 *                   price: 1800
 *               totalAmount: 1800
 *               tax: 50
 *               discount: 100
 *               grandTotal: 1750
 *               invoiceDate: "2025-11-01"
 *               dueDate: "2025-11-10"
 *               status: "pending"
 *     responses:
 *       201:
 *         description: Invoice created successfully
 *       500:
 *         description: Error creating invoice
 */
router.post("/", invoicecontroller_1.createInvoice);
/**
 * @swagger
 * /invoices/{id}:
 *   get:
 *     summary: Get invoice details by ID
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the invoice
 *     responses:
 *       200:
 *         description: Successfully retrieved invoice
 *       404:
 *         description: Invoice not found
 *       500:
 *         description: Server error
 */
router.get("/:id", invoicecontroller_1.getInvoiceById);
/**
 * @swagger
 * /invoices/user/{userId}:
 *   get:
 *     summary: Get all invoices for a specific user
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Successfully retrieved invoices
 *       404:
 *         description: No invoices found for this user
 *       500:
 *         description: Server error
 */
router.get("/user/:userId", invoicecontroller_1.getInvoicesByUser);
/**
 * @swagger
 * /invoices/{id}:
 *   delete:
 *     summary: Delete an invoice by ID
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Invoice ID
 *     responses:
 *       200:
 *         description: Invoice deleted successfully
 *       404:
 *         description: Invoice not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", invoicecontroller_1.deleteInvoice);
exports.default = router;
//# sourceMappingURL=invoiceroutes.js.map