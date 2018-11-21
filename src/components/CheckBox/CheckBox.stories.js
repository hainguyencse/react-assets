import React from 'react';
import { action } from '@storybook/addon-actions';
import CheckBox from '.';
import CheckboxField from '../CheckboxField';
import { Form, Formik } from 'formik';
import Button from '../Button/index';

export default [
  {
    title: 'Demo',
    component: 
    <div>
      <CheckBox label="Checkbox 1" name="checkbox1" checked></CheckBox>
      <CheckBox label="Checkbox 2"></CheckBox>
      <CheckBox label="Checkbox 3"></CheckBox>
      <Formik
        onSubmit={() => {}}
      >
        {
          ({ isSubmitting, isValid, values }) => (
            <Form>
              <CheckboxField label="Checkbox 4" name="checkbox4" value="check4" />
              <br /><br />
              <div style={{ textAlign: 'right' }}>
                <Button className="btn  btn-primary" type="submit">Generate</Button>
              </div>
            </Form>
          )
        }
      </Formik>
    </div>
  }
];
