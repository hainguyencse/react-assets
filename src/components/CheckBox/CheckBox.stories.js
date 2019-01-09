import React from 'react';
import { action } from '@storybook/addon-actions';
import CheckBox from '.';
import CheckboxField from '../CheckboxField';
import { Form, Formik } from 'formik';
import Button from '../Button/index';
import GroupCheckboxField from '../GroupCheckBoxField';
import TextAreaField from '../TextAreaField';

const validate = (values) => {
  const errors = {};
  if (!values.overview) {
    errors.overview = 'Please enter overview';
  }
  return errors;
};

export default [
  {
    title: 'Demo',
    component:
    <div>
      <CheckBox label="Checkbox 1" name="checkbox1" checked></CheckBox>
      <CheckBox label="Checkbox 2"></CheckBox>
      <CheckBox label="Checkbox 3"></CheckBox>
      <Formik
        initialValues={{
          checkbox: ['2'],
          checkbox4: true
        }}
        validate={validate}
        enableReinitialize
        onSubmit={(values) => { console.log('values', values); }}
      >
        {
          ({ isSubmitting, isValid, values }) => (
            <Form>
              <CheckboxField label="Checkbox 4" name="checkbox4" />
              <GroupCheckboxField label="Checkbox 5" gName="checkbox" name="checkbox5" value="1" checked={values.checkbox.indexOf('1') >= 0} />
              <GroupCheckboxField label="Checkbox 6" gName="checkbox" name="checkbox6" value="2" checked={values.checkbox.indexOf('2') >= 0} />
              <TextAreaField
                id="overview"
                name="overview"
                label="Overview"
                sub="*"
              />
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
