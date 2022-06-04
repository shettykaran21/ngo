import { TextField } from '@mui/material';

const FormInput = ({
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
      {...props}
    />
  );
};

export default FormInput;
