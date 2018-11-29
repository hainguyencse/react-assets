import React from 'react';
import { action } from '@storybook/addon-actions';
import CheckBox from '.';
import CheckboxField from '../CheckboxField';
import { Form, Formik } from 'formik';
import Button from '../Button/index';
import TimeInputField from './index';

export default [
  {
    title: 'Demo',
    component:
      <div>
        <Formik
          initialValues={{
            time: '11:12',
          }}
          enableReinitialize
          onSubmit={(values) => { console.log('values', values); }}
        >
          {
            ({ isSubmitting, isValid, values }) => (
              <Form>
                <TimeInputField label="Cut off Time" name="time" placeholder="HH:MM" />
                <br /><br />
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
