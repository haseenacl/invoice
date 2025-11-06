"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInvoice = exports.getInvoicesByUser = exports.getInvoiceById = exports.createInvoice = void 0;
const Invoice_1 = __importDefault(require("../models/Invoice"));
// ✅ Create Invoice
const createInvoice = async (req, res) => {
    try {
        const { userId, invoiceNumber, customerName, customerEmail, products, totalAmount, tax, discount, grandTotal, invoiceDate, dueDate, status } = req.body;
        const newInvoice = new Invoice_1.default({
            userId,
            invoiceNumber,
            customerName,
            customerEmail,
            products,
            totalAmount,
            tax,
            discount,
            grandTotal,
            invoiceDate,
            dueDate,
            status
        });
        await newInvoice.save();
        res.status(201).json({ message: "Invoice created successfully", data: newInvoice });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating invoice", error: error.message });
    }
};
exports.createInvoice = createInvoice;
// ✅ Get Invoice by ID
const getInvoiceById = async (req, res) => {
    try {
        const invoice = await Invoice_1.default.findById(req.params.id);
        if (!invoice)
            return res.status(404).json({ message: "Invoice not found" });
        res.status(200).json(invoice);
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
exports.getInvoiceById = getInvoiceById;
// ✅ Get all invoices by userId
const getInvoicesByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const invoices = await Invoice_1.default.find({ userId });
        if (!invoices.length)
            return res.status(404).json({ message: "No invoices found" });
        res.status(200).json(invoices);
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
exports.getInvoicesByUser = getInvoicesByUser;
// ✅ Delete Invoice
const deleteInvoice = async (req, res) => {
    try {
        const { id } = req.params;
        const invoice = await Invoice_1.default.findByIdAndDelete(id);
        if (!invoice) {
            return res.status(404).json({ message: "Invoice not found" });
        }
        res.status(200).json({ message: "Invoice deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting invoice:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
exports.deleteInvoice = deleteInvoice;
//# sourceMappingURL=invoicecontroller.js.map