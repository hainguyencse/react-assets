import React from 'react';
import { action } from '@storybook/addon-actions';

import { Form, Formik } from 'formik';
import Button from '../Button/index';
import NumericInputField from '.';

export default [
  {
    title: 'Demo',
    component:
      <div>
        <Formik
          onSubmit={(values) => { console.log('values', values); }}
        >
          {
            ({ isSubmitting, isValid, values, setFieldValue }) => (
              <Form>
                <NumericInputField
                  name="number"
                  label="Number"
                />
                <div style={{ textAlign: 'right' }}>
                  <Button className="btn  btn-primary" type="submit">Submit</Button>
                </div>
              </Form>
            )
          }
        </Formik>
      </div>
  }
];
