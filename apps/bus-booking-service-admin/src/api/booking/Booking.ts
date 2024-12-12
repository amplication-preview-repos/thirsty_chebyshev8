import { JsonValue } from "type-fest";
import { Supplier } from "../supplier/Supplier";

export type Booking = {
  bookingDate: Date | null;
  createdAt: Date;
  customer: string | null;
  destinationCoordinates: JsonValue;
  destinationLocation: string | null;
  destinationTime: Date | null;
  id: string;
  pickupCoordinates: JsonValue;
  pickupLocation: string | null;
  pickupTime: Date | null;
  status?: "Option1" | null;
  supplier?: Supplier | null;
  totalAmount: number | null;
  updatedAt: Date;
};
