import { useTranslation } from 'react-i18next'

export default function useLanguage(): string {
  const { i18n } = useTranslation()
  return i18n.language
}
