import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  bookingDate?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  supplierId?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
