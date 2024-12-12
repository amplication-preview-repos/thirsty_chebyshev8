import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type BookingWhereInput = {
  bookingDate?: DateTimeNullableFilter;
  customer?: StringNullableFilter;
  destinationCoordinates?: JsonFilter;
  destinationLocation?: StringNullableFilter;
  destinationTime?: DateTimeNullableFilter;
  id?: StringFilter;
  pickupCoordinates?: JsonFilter;
  pickupLocation?: StringNullableFilter;
  pickupTime?: DateTimeNullableFilter;
  status?: "Option1";
  supplier?: SupplierWhereUniqueInput;
  totalAmount?: FloatNullableFilter;
};
