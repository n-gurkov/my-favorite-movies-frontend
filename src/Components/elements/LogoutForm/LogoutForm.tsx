import { clearLogInData, getLocalData } from 'src/utils'
import { LogoutButton, LogoutFormWrapper } from './assets/styles'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LogoutForm = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const user = getLocalData('currentUser')
  const logOut = () => {
    clearLogInData()
    navigate('/', { replace: true })
  }

  return (
    <LogoutFormWrapper>
      {t('mainPage.hello')}, {user}!
      <LogoutButton onClick={logOut}>{t('mainPage.logout')}</LogoutButton>
    </LogoutFormWrapper>
  )
}
export default LogoutForm
