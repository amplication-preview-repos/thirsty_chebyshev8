import { Supplier } from "../supplier/Supplier";

export type Booking = {
  bookingDate: Date | null;
  createdAt: Date;
  customer: string | null;
  id: string;
  status?: "Option1" | null;
  supplier?: Supplier | null;
  totalAmount: number | null;
  updatedAt: Date;
};
