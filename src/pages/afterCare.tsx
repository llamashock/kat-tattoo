import Layout from '../components/layout'
import styles from '../styles/general.module.css'

const afterCare = () => {
    return (
    <Layout>
        <h1 className={`${styles.h1}`}>After Care</h1>
        <ol>
            <li className={`${styles.p}`}>Wash tattoo with an antibacterial soap and water after leaving the shop, pat dry and apply an unscented white lotion (Lubriderm, Aveeno, Eucerin, Tattoo Goo, etc.)</li>
            <li className={`${styles.p}`}>Keep your tattoo clean. Wash twice daily with warm water and antibacterial soap. It is fine to shower or wash in the tub, but do not allow the tattoo to soak.</li>
            <li className={`${styles.p}`}>Apply unscented white lotion as needed to prevent dryness of the tattoo.</li>
            <li className={`${styles.p}`}>DO NOT pick at or scratch tattoo during the healing process. This can pull out the ink. It is normal for tattoos to scab/ peel during healing as this is the body’s natural healing process.</li>
            <li className={`${styles.p}`}>Wear clean, loose clothing over the area to protect the tattoo during the healing process.</li>
            <li className={`${styles.p}`}>DO NOT expose your healing tattoo to the sun, tanning beds, hot tubs, swimming pools, lakes or any unclean conditions that may interfere with the healing process.</li>
            <li className={`${styles.p}`}>Once tattoo is fully healed (around 30 days) use high SPF sunblock when your tattoo is exposed to the sun.</li>
        </ol>
    </Layout>
    )
}

export default afterCare;