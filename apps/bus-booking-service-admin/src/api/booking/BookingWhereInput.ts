import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type BookingWhereInput = {
  bookingDate?: DateTimeNullableFilter;
  customer?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  supplier?: SupplierWhereUniqueInput;
  totalAmount?: FloatNullableFilter;
};
