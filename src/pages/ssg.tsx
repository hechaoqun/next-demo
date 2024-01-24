import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '@/styles/Home.module.css'

export default function SSR() {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div className={styles.container}>
      <h1>{t('title', 'Hallo World')}</h1>
      <h2>Translation via getServerSideProps</h2>
      <Link href="/">{t('home', 'Home page')}</Link>
      {['de', 'en'].map((language) => (
        <Link key={language} href={router.pathname} locale={language}>
          <div
            style={{
              display: 'inline-flex',
              padding: '0.3em',
              marginTop: '1em',
            }}
          >
            {language.toUpperCase()}
          </div>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
