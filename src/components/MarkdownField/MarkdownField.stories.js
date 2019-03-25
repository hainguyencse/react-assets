import React from 'react';

import { Form, Formik } from 'formik';
import Button from '../Button/index';
import MarkdownField from '.';

export default [
  {
    title: 'Demo',
    component: (
      <div>
        <Formik
          onSubmit={(values) => {
            console.log('values', values);
          }}
        >
          {() => (
            <Form>
              <MarkdownField name="editor" label="Markdown Editor" />
              <div style={{ textAlign: 'right' }}>
                <Button className="btn  btn-primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
];
