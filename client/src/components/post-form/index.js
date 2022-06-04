import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, lighten, Typography } from '@mui/material';

import FormTextArea from './form-textarea';
import api from '../../utils/api';

const PostForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    values,
    errors,
    touched,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: { body: '' },

    onSubmit: async (values, { setStatus, resetForm }) => {
      setLoading(true);
      try {
        const { data } = await api.post('/post', values);

        console.log(data);
      } catch (err) {
        setStatus(err.response.data.message);
      }
      setLoading(false);
    },

    validationSchema: Yup.object({
      body: Yup.string()
        .required('Post body is required.')
        .min(5, 'Post must be at least 5 characters.')
        .max(1000, 'Post must be at most 1000 characters.'),
    }),
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormTextArea
        type="text"
        name="body"
        autoComplete="off"
        value={values.body}
        variant="outlined"
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={touched.body && errors.body}
        errorMsg={errors.body && errors.body}
      />
      {status && (
        <Typography sx={{ color: lighten('#ff0000', 0.8) }}>
          {status}
        </Typography>
      )}
      <Button type="submit">Post</Button>
    </form>
  );
};

export default PostForm;
