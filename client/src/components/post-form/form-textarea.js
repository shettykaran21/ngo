import { TextField } from '@mui/material';

const FormTextArea = ({
  label,
  name,
  hasError = false,
  errorMsg,
  variant = 'standard',
  ...props
}) => {
  return (
    <TextField
      id={name}
      label={label}
      variant={variant}
      fullWidth
      error={hasError ? true : false}
      helperText={hasError && errorMsg}
      margin="normal"
      multiline
      minRows={6}
      {...props}
    />
  );
};

export default FormTextArea;
