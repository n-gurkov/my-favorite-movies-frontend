import { Field } from 'react-final-form';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

const LoginField = (props: {
  name: string;
  isPassword?: boolean;
  label: string;
}) => {
  const { t, i18n } = useTranslation();
  return (
    <Field name={props.name}>
      {({ input, meta }) => (
        <div>
          <TextField
            {...input}
            type={props.isPassword ? 'password' : 'text'}
            placeholder={t(props.label)}
          />
          {(meta.error || meta.submitError) && meta.touched && (
            <h4> {t(meta.error) || meta.submitError} </h4>
          )}
        </div>
      )}
    </Field>
  );
};

export default LoginField;
