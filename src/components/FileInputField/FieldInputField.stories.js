import React from 'react';

import { Form, Formik } from 'formik';
import FileInputField from '.';
import Button from '../Button';

export default [
  {
    title: 'Demo',
    component:
      <div>
        <Formik
          onSubmit={(values) => { console.log('values', values); }}
        >
          {
            () => (
              <Form>
                <FileInputField
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
  }
];
