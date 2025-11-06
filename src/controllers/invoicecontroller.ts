import { Request, Response } from "express";
import Invoice from "../models/Invoice";

// ✅ Create Invoice
export const createInvoice = async (req: Request, res: Response) => {
  try {
       const {
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
    } = req.body;

    const newInvoice = new Invoice({
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
  } catch (error: any) {
    res.status(500).json({ message: "Error creating invoice", error: error.message });
  }
};

// ✅ Get Invoice by ID
export const getInvoiceById = async (req: Request, res: Response) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });
    res.status(200).json(invoice);
  } catch (error: any) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Get all invoices by userId
export const getInvoicesByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const invoices = await Invoice.find({ userId });
    if (!invoices.length) return res.status(404).json({ message: "No invoices found" });
    res.status(200).json(invoices);
  } catch (error: any) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Delete Invoice
export const deleteInvoice = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findByIdAndDelete(id);

    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.status(200).json({ message: "Invoice deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting invoice:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};