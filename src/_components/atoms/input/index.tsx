import * as React from 'react';
import TextFieldMaterial from '@material-ui/core/TextField';
import { FieldRenderProps } from 'react-final-form';

type TextFieldProps = {
  value?: string;
  placeholder?: string;
  formError?: string;
};

type Props = FieldRenderProps<string, any>;

export const TextField: React.FC<Props & TextFieldProps> = ({
  input,
  placeholder,
  meta: { touched, invalid, error, submitError },
  formError,
}) => (
  <TextFieldMaterial
    fullWidth
    placeholder={placeholder}
    error={Boolean((touched && invalid) || formError)}
    helperText={(touched && (error || submitError)) || formError}
    {...input}
  />
);
