import React from 'react';
import { Formik, Form } from 'formik';

import { action } from '@storybook/addon-actions';
import ArrayFilterField from '.';

const arrayFilterData = [
  { key: 'status', type: '', value: 'Confirmed' }
];
export const keyOptions = [
  { value: 'status', label: 'Status' },
  { value: 'trip_type', label: 'Trip Type' },
  { value: 'start_date', label: 'Travel date' },
  { value: 'user', label: 'Localguide' },
  { value: 'traveller', label: 'Traveller' },
];
export const typeOptions = [
  { value: '', label: '=' },
  { value: '__gte', label: '>=' },
  { value: '__lte', label: '<=' }
];

const FilterForm = ({
  onSubmit, onDismiss, visible, arrayFilterData, keyOptions, typeOptions
}) => (
  <Formik
    enableReinitialize
    initialValues={{
      filter: arrayFilterData,
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
      arrayFilterData={arrayFilterData}
      keyOptions={keyOptions}
      typeOptions={typeOptions}
    />,
  }
];
