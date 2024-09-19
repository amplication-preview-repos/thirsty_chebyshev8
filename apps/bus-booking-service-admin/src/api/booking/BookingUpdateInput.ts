import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type BookingUpdateInput = {
  bookingDate?: Date | null;
  customer?: string | null;
  status?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
  totalAmount?: number | null;
};
