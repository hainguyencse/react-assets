import React from 'react';
import { action } from '@storybook/addon-actions';
import CheckBox from '.';
import CheckboxField from '../CheckboxField';
import { Form, Formik } from 'formik';
import Button from '../Button/index';
import GroupCheckboxField from '../GroupCheckBoxField';

export default [
  {
    title: 'Demo',
    component: 
    <div>
      <CheckBox label="Checkbox 1" name="checkbox1" checked></CheckBox>
      <CheckBox label="Checkbox 2"></CheckBox>
      <CheckBox label="Checkbox 3"></CheckBox>
      <Formik
        onSubmit={(values) => { console.log('values', values); }}
      >
        {
          ({ isSubmitting, isValid, values }) => (
            <Form>
              <CheckboxField label="Checkbox 4" name="checkbox4" />
              <GroupCheckboxField label="Checkbox 5" gName="checkbox" name="checkbox5" value="1" />
              <GroupCheckboxField label="Checkbox 6" gName="checkbox" name="checkbox6" value="2" />
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
