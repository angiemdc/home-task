/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Card,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Checkbox,
  Row
} from 'antd';

import { useAddDeleteModal } from '../../hooks/useAddDeleteModal';

import 'antd/dist/antd.css';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

export const AddEditContent = () => {
  const { state } = useAddDeleteModal();
  const { openAdd, openEdit, title } = state;
  const [form] = Form.useForm();
  const genres = ['Crime', 'Documentary', 'Horror', 'Comedy'];
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const cardWithAddEdit = openAdd || openEdit;

  return (
    <Card title={title} bordered={false} style={{ width: 860 }}>
      {cardWithAddEdit ? (
        <Form
          {...formItemLayout}
          form={form}
          layout='vertical'
          name='register'
          onFinish={onFinish}
          initialValues={{}}
          scrollToFirstError
        >
          <Row>
            <Form.Item name='movie-title' label='TITLE'>
              <Input placeholder='Please enter movie title' />
            </Form.Item>

            <Form.Item name='date-picker' label='RELEASE DATE'>
              <DatePicker placeholder='Select Date' />
            </Form.Item>
          </Row>

          <Row>
            <Form.Item name='movie-url' label='MOVIE URL'>
              <Input placeholder='https://' />
            </Form.Item>
            <Form.Item name='rating' label='RATING'>
              <Input placeholder='7.8' />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item name='genre' label='GENRE'>
              <Select placeholder='Select Genre'>
                {genres &&
                  genres.map((genre) => (
                    <Option key={genre} value={genre}>
                      <Checkbox>{genre}</Checkbox>
                    </Option>
                  ))}
              </Select>
            </Form.Item>
            <Form.Item name='runtime' label='RUNTIME'>
              <Input placeholder='Minutes' />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item name='overview' label='OVERVIEW'>
              <Input.TextArea
                allowClear
                showCount
                placeholder='Movie description'
              />
            </Form.Item>
          </Row>

          <Form.Item {...tailFormItemLayout}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <>
          <p>Are you sure you want to delete this movie?</p>
          <Button type='primary'>Confirm</Button>
        </>
      )}
    </Card>
  );
};
