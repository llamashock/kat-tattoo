import Footer from './footer'
import Meta from './meta'
import Header from './header'
import styles from '../styles/general.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <div className={styles.font}>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main className={styles.body}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
