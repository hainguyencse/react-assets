import React from 'react';
import { action } from '@storybook/addon-actions';

import { Form, Formik } from 'formik';
import InputField from './index';
import Button from '../Button/index';

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
                <InputField
                  name="thumbnail"
                  label="Thumbnail"
                />
                <div style={{ textAlign: 'right' }}>
                  <Button className="btn  btn-primary" type="submit">Submit</Button>
                </div>
              </Form>
            )
          }
        </Formik>
      </div>
  },
  {
    title: 'Numeric field',
    component:
      <div>
        <Formik
          onSubmit={(values) => { console.log('values', values); }}
        >
          {
            ({ isSubmitting, isValid, values, setFieldValue }) => (
              <Form>
                <InputField
                  name="numeric-field"
                  label="Numeric field"
                  isNumeric
                />
                <div style={{ textAlign: 'right' }}>
                  <Button className="btn btn-primary" type="submit">Submit</Button>
                </div>
              </Form>
            )
          }
        </Formik>
      </div>
  }
];
