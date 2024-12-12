import { InputJsonValue } from "../../types";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type BookingUpdateInput = {
  bookingDate?: Date | null;
  customer?: string | null;
  destinationCoordinates?: InputJsonValue;
  destinationLocation?: string | null;
  destinationTime?: Date | null;
  pickupCoordinates?: InputJsonValue;
  pickupLocation?: string | null;
  pickupTime?: Date | null;
  status?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
  totalAmount?: number | null;
};
