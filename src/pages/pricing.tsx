import Layout from '../components/layout'
import styles from '../styles/general.module.css'
import Link from 'next/link'

const pricing = () => {
    return (
    <Layout>
        <h1 className={`${styles.h1}`}>Pricing</h1>
        <p className={`${styles.p}`}>Pricing varies depending on the tattoo, bigger or more complex pieces (such as sleeve work) are typically charged hourly of $100 an hour. Smaller pieces are typically priced per piece, which can vary greatly. The minimum price is $70.</p>
        <p className={`${styles.p}`}>{"Please "}
            <Link as={`/contact`} href="/contact">
                <a className={`${styles.link} ${styles.underlineHover}`}>contact us</a>
            </Link>
            {" to get a quote for your tattoo."}
        </p>
    </Layout>
    )
}

export default pricing;