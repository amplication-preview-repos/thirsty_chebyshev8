import { BookingUpdateManyWithoutSuppliersInput } from "./BookingUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  address?: string | null;
  bookings?: BookingUpdateManyWithoutSuppliersInput;
  contactPerson?: string | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
