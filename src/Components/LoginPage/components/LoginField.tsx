import { Field } from 'react-final-form'
import TextField from '@mui/material/TextField'
import { useTranslation } from 'react-i18next'
import { ReactElement } from 'react'

const LoginField = (props: {
  name: string
  type?: 'text' | 'password'
  label: string
}): ReactElement => {
  const { t, i18n } = useTranslation()
  const { type = 'text', label, name } = props
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <div>
          <TextField {...input} type={type} placeholder={t(label)} />
          {(meta.error || meta.submitError) && meta.touched && (
            <h4> {t(meta.error) || meta.submitError} </h4>
          )}
        </div>
      )}
    </Field>
  )
}

export default LoginField
