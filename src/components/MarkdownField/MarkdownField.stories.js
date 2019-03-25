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
          initialValues={{
            existed: 'Có lẽ ai cũng đã từng ước mơ được “trốn” khỏi cuộc sống thành thị ồn ào, rắc rối, tìm kiếm một nơi an yên để thư thái tâm hồn. Nằm gọn trong lòng các vách núi, Bản Ngòi - Hang Kia chính là lựa chọn hoàn hảo cho những phút giây yên bình ấy!',
          }}
          onSubmit={(values) => {
            console.log('values', values);
          }}
        >
          {() => (
            <Form>
              <MarkdownField name="existed" label="Existed value" />
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
