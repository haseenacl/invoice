import mongoose, { Schema, Document } from "mongoose";

export interface IInvoice extends Document {
  userId: mongoose.Types.ObjectId;          // The user who created the invoice
  invoiceNumber: string;   // Unique invoice number
  customerName: string;    // Customer name
  customerEmail?: string;  // Optional email field
  products: {
    name: string;          // Product name
    quantity: number;      // Product quantity
    price: number;         // Price per unit
  }[];
  totalAmount: number;     // Total invoice amount
  tax?: number;            // Optional tax amount
  discount?: number;       // Optional discount
  grandTotal: number;      // Final total after tax/discount
  invoiceDate: Date;       // Date of invoice
  dueDate?: Date;          // Optional due date
  status: string;          // paid / pending / cancelled
}

const invoiceSchema = new Schema<IInvoice>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    invoiceNumber: {
      type: String,
      required: true,
      unique: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
    },
    products: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    grandTotal: {
      type: Number,
      required: true,
    },
    invoiceDate: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["paid", "pending", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IInvoice>("Invoice", invoiceSchema);
