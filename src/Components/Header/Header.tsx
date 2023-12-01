import { MenuItem, Select } from '@mui/material'
import { useTranslation } from 'react-i18next'
import logo from '../LoginPage/assets/logo.svg'
import { HeaderWrapper, LogoWrapper, MainPageLink } from './assets/styles'

export const Header = () => {
  const { t, i18n } = useTranslation()

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={logo} alt={t('header.logo')} />
      </LogoWrapper>
      <MainPageLink href="/main-page">{t('header.title')}</MainPageLink>
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
