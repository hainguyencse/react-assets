import React from 'react';
import { Form, Formik } from 'formik';
import Button from '../Button/index';
import SelectField from './index';

const options = [{
  label: 'template 1', value: 'template1'
}];

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
                <SelectField
                  label="Template"
                  name="template"
                  options={options}
                  onChange={(selectedValue) => { console.log('selected value', selectedValue); }}
                />
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
