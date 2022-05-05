/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  SubmitButton,
  Input,
  Checkbox,
  ResetButton,
  Form,
  Select,
  DatePicker,
  FormItem
} from 'formik-antd';
import { Card, Button, Row, Col } from 'antd';
import { useMovieData } from '../../hooks/useMovieData';
import { actions } from '../../context/MovieReducer';
import { genres } from '../../mock_data';

import 'antd/dist/antd.css';
import './AddEditMovie.modules.scss';

const { Option } = Select;

const validateRequired = (value) => {
  return value ? undefined : 'required';
};

export const AddEditMovie = ({
  title,
  openAdd,
  openEdit,
  id,
  handleCancel,
  initialValues = {
    title: '',
    movieUrl: '',
    overview: '',
    genre: '',
    rating: '',
    runtime: ''
  }
}) => {
  const cardWithAddEdit = openAdd || openEdit;
  const { addEditMovieData, deletedMovie } = useMovieData();
  const actionType = openAdd ? actions.TO_ADD : actions.TO_EDIT;

  const handleDeleteMove = () => {
    deletedMovie(id);
    handleCancel();
  };

  const onFormSubmit = (values, action) => {
    const formatYear = new Date(values.year).getFullYear();
    action.setSubmitting(false);
    action.resetForm();
    addEditMovieData(actionType, { ...values, year: formatYear });
    handleCancel();
  };

  const validateForm = (values) => {
    if (!values.title) {
      return { title: 'required' };
    }
    return {};
  };

  return (
    <Card title={title} bordered={false} style={{ width: 860 }}>
      {cardWithAddEdit ? (
        <Formik
          initialValues={initialValues}
          onSubmit={onFormSubmit}
          validate={validateForm}
        >
          {() => (
            <Form layout='vertical' name='register' scrollToFirstError>
              <Row gutter={[24, 16]} justify='space-around' wrap>
                <Col span={12}>
                  <FormItem
                    name='title'
                    label='TITLE'
                    required
                    validate={validateRequired}
                  >
                    <Input
                      name='title'
                      placeholder='Please enter movie title'
                    />
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem name='year' label='RELEASE DATE'>
                    <DatePicker
                      placeholder='Select Date'
                      size='middle'
                      className='date'
                      name='year'
                      picker='year'
                    />
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    name='image'
                    label='MOVIE URL'
                    required
                    validate={validateRequired}
                  >
                    <Input name='image' placeholder='https://' />
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem name='rating' label='RATING'>
                    <Input name='rating' placeholder='7.8' />
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    name='genre'
                    value='GENRE'
                    required
                    validate={validateRequired}
                  >
                    <Select name='genre' placeholder='Select Genre'>
                      {genres.map((genre) => (
                        <Option key={genre} value={genre}>
                          <Checkbox>{genre}</Checkbox>
                        </Option>
                      ))}
                    </Select>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    name='runtime'
                    label='RUNTIME'
                    required
                    validate={validateRequired}
                  >
                    <Input name='runtime' placeholder='Minutes' />
                  </FormItem>
                </Col>
                <Col span={24}>
                  <FormItem
                    name='description'
                    label='OVERVIEW'
                    required
                    validate={validateRequired}
                  >
                    <Input.TextArea
                      name='description'
                      allowClear
                      showCount
                      placeholder='Movie description'
                    />
                  </FormItem>
                </Col>
              </Row>

              <Row gutter={32}>
                <Col offset={16}>
                  <Button.Group>
                    <ResetButton type='secondary'>Reset</ResetButton>
                    <SubmitButton type='primary' htmlType='submit'>
                      Submit
                    </SubmitButton>
                  </Button.Group>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      ) : (
        <Row gutter={32}>
          <p>Are you sure you want to delete this movie?</p>
          <Col offset={16}>
            <Button type='primary' onClick={handleDeleteMove}>
              Confirm
            </Button>
          </Col>
        </Row>
      )}
    </Card>
  );
};

AddEditMovie.defaultProps = {
  openAdd: false,
  openEdit: false,
  id: '',
  initialValues: {}
};

AddEditMovie.propTypes = {
  title: PropTypes.string.isRequired,
  openAdd: PropTypes.bool,
  openEdit: PropTypes.bool,
  id: PropTypes.string,
  handleCancel: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    movieUrl: PropTypes.string,
    description: PropTypes.string,
    year: PropTypes.string,
    id: PropTypes.string
  })
};
