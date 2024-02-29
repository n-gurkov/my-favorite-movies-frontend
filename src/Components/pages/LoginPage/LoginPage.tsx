import Button from '@mui/material/Button'
import { Form } from 'react-final-form'
import logo from './assets/logo.svg'
import { LoginForm, FormWrapper, ButtonWrapper } from './assets/styles'
import LoginField from './components/LoginField'
import { useTranslation } from 'react-i18next'
import { loginUser } from '../../../utils'
import { FORM_ERROR } from 'final-form'
import { useNavigate } from 'react-router-dom'
import { loginFormInputErrors } from '../../Types/types'

const LoginPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const onSubmit = (input: { login: string; password: string }) => {
    const isMatchPassword = loginUser(input.login, input.password)
    if (!isMatchPassword) {
      return { [FORM_ERROR]: t('loginPage.incorrectUser') }
    } else {
      navigate('/main-page')
    }
  }
  return (
    <FormWrapper>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors: loginFormInputErrors = {}
          if (!values.login) {
            errors.login = 'loginPage.emptyField'
          }
          if (!values.password) {
            errors.password = 'loginPage.emptyField'
          }
          return errors
        }}
        render={({ submitError, handleSubmit }) => (
          <LoginForm onSubmit={handleSubmit}>
            <img src={logo} alt={t('loginPage.logo')} />

            <LoginField name="login" label="loginPage.login" />

            <LoginField
              name="password"
              label="loginPage.password"
              type="password"
            />
            {submitError && <h4> {submitError}</h4>}
            <ButtonWrapper>
              <Button type="submit" variant="contained" onClick={handleSubmit}>
                {t('loginPage.signIn')}
              </Button>
            </ButtonWrapper>
          </LoginForm>
        )}
      />
    </FormWrapper>
  )
}

export default LoginPage
