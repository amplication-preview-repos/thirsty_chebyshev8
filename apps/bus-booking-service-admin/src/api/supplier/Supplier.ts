import { Booking } from "../booking/Booking";

export type Supplier = {
  address: string | null;
  bookings?: Array<Booking>;
  contactPerson: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
