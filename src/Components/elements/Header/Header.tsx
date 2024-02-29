import { MenuItem, Select } from '@mui/material'
import { useTranslation } from 'react-i18next'
import logo from 'src/Components/pages/LoginPage/assets/logo.svg'
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
        value={i18n.language}
        onChange={(event) => i18n.changeLanguage(event.target.value as string)}
      >
        <MenuItem value="en-US">{t('header.en')}</MenuItem>

        <MenuItem value="ru-RU">{t('header.ru')}</MenuItem>
      </Select>
    </HeaderWrapper>
  )
}
