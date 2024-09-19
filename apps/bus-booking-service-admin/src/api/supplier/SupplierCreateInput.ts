import { BookingCreateNestedManyWithoutSuppliersInput } from "./BookingCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  address?: string | null;
  bookings?: BookingCreateNestedManyWithoutSuppliersInput;
  contactPerson?: string | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
