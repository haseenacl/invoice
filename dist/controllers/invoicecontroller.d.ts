import { Request, Response } from "express";
export declare const createInvoice: (req: Request, res: Response) => Promise<void>;
export declare const getInvoiceById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getInvoicesByUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteInvoice: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=invoicecontroller.d.ts.map