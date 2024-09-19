import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  SelectInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

import { SupplierTitle } from "../supplier/SupplierTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="bookingDate" source="bookingDate" />
        <TextInput label="Customer" source="customer" />
        <div />
        <TextInput label="destinationLocation" source="destinationLocation" />
        <DateTimeInput label="destinationTime" source="destinationTime" />
        <div />
        <TextInput label="pickupLocation" source="pickupLocation" />
        <DateTimeInput label="pickupTime" source="pickupTime" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <NumberInput label="totalAmount" source="totalAmount" />
      </SimpleForm>
    </Edit>
  );
};
