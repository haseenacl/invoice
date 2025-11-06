import mongoose, { Document } from "mongoose";
export interface IInvoice extends Document {
    userId: mongoose.Types.ObjectId;
    invoiceNumber: string;
    customerName: string;
    customerEmail?: string;
    products: {
        name: string;
        quantity: number;
        price: number;
    }[];
    totalAmount: number;
    tax?: number;
    discount?: number;
    grandTotal: number;
    invoiceDate: Date;
    dueDate?: Date;
    status: string;
}
declare const _default: mongoose.Model<IInvoice, {}, {}, {}, mongoose.Document<unknown, {}, IInvoice, {}, {}> & IInvoice & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Invoice.d.ts.map