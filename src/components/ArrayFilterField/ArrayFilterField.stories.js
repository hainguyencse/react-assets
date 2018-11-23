import React from 'react';
import { Formik, Form } from 'formik';

import { action } from '@storybook/addon-actions';
import ArrayFilterField from '.';

const statusOptions = [
  { value: 'pending', label: 'Pending' },
  { value: 'confirmed', label: 'Confirmed' },
];
export const keyOptions = [
  { value: 'status', label: 'Status', type: 'select', subOptions: statusOptions },
  { value: 'trip_type', label: 'Trip Type', type: 'input' },
  { value: 'start_date', label: 'Travel date', type: 'input' },
  { value: 'user', label: 'Localguide', type: 'input' },
  { value: 'traveller', label: 'Traveller', type: 'input' },
];

export const typeOptions = [
  { value: '', label: '=' },
  { value: '__gte', label: '>=' },
  { value: '__lte', label: '<=' }
];

const arrayData = [
  { key: 'status', type: '', value: 'pending' },
  { key: 'user', type: '', value: '3077' }
];

const FilterForm = ({
  onSubmit, onDismiss, visible, arrayFilterData, keyOptions, typeOptions
}) => (
  <Formik
    enableReinitialize
    initialValues={{
      filter: arrayData,
    }}
    onSubmit={onSubmit}
  >
    {({
      isSubmitting, isValid, values, submitForm
    }) => (
      <Form>
        <ArrayFilterField
          name="filter"
          label="Filters"
          arrayData={values.filter}
          keyOptions={keyOptions}
          typeOptions={typeOptions}
        />
      </Form>
    )}
  </Formik>
);

export default [
  {
    title: 'Array Filter',
    component: <FilterForm
      arrayData={arrayData}
      keyOptions={keyOptions}
      typeOptions={typeOptions}
    />,
  }
];
