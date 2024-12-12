import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const BookingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bookingDate" source="bookingDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Customer" source="customer" />
        <TextField
          label="destinationCoordinates"
          source="destinationCoordinates"
        />
        <TextField label="destinationLocation" source="destinationLocation" />
        <TextField label="destinationTime" source="destinationTime" />
        <TextField label="ID" source="id" />
        <TextField label="pickupCoordinates" source="pickupCoordinates" />
        <TextField label="pickupLocation" source="pickupLocation" />
        <TextField label="pickupTime" source="pickupTime" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="Supplier"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="totalAmount" source="totalAmount" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
