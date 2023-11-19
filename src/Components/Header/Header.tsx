import { MenuItem, Select } from '@mui/material'
import { useTranslation } from 'react-i18next'
import logo from '../LoginPage/assets/logo.svg'
import { HeaderWrapper, LogoWrapper } from './assets/styles'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={logo} alt={t('header.logo')} />
      </LogoWrapper>
      <a onClick={() => navigate('/main-page')}>{t('header.title')}</a>
      <Select
        defaultValue="en-US"
        onChange={(event) => i18n.changeLanguage(event.target.value as string)}
      >
        <MenuItem value="en-US">{t('header.en')}</MenuItem>

        <MenuItem value="ru-RU">{t('header.ru')}</MenuItem>
      </Select>
    </HeaderWrapper>
  )
}
