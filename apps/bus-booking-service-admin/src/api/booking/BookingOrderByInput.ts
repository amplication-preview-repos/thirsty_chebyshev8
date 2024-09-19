import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  bookingDate?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  destinationCoordinates?: SortOrder;
  destinationLocation?: SortOrder;
  destinationTime?: SortOrder;
  id?: SortOrder;
  pickupCoordinates?: SortOrder;
  pickupLocation?: SortOrder;
  pickupTime?: SortOrder;
  status?: SortOrder;
  supplierId?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
