import Layout from '../components/layout'
import styles from '../styles/general.module.css'

const privacyTerms = () => {
    return (
    <Layout>
        <h1 className={`${styles.h1}`}>Privacy Policy</h1>
        <p className={`${styles.p}`}>We do not collect or share any personal information. We do not use analytics or cookies to "improve your experience". Lorem ipsum and such.</p>
        <h1 className={`${styles.h1}`}>Terms of Use</h1>
        <p className={`${styles.p}`}>By using this website you agree that this service is provided with no warranty of any kind. You also are not attempting any malicious activity such as hacking this website. Lorem ipsum and such.</p>
    </Layout>
    )
}

export default privacyTerms;