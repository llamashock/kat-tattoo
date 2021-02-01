import Layout from '../components/layout'
import styles from '../styles/general.module.css'

const contact = () => {
    return (
    <Layout>
        <h1 className={`${styles.h1}`}>Contact Us</h1>
        
        <h2 className={`${styles.h2}`}>Email</h2>
        <p className={`${styles.p}`}>tattsbykat@gmail.com</p>

        <h2 className={`${styles.h2}`}>On Social Media</h2>
        <a href="https://www.instagram.com/tattsbykat/" className={`${styles.link}`}>Instagram</a>
        
        <h2 className={`${styles.h2}`}>Location</h2>
        
        <p className={`${styles.p}`}>
            706 S. Illinois Ave. Suite D105
        </p>
        <p className={`${styles.p}`}>
            Oak Ridge, Tennessee
        </p>
        <p className={`${styles.p}`}>
            This is in Pine Ridge office park, the first building on the right when you pull into the parking lot.
        </p>
        
        <h2 className={`${styles.h2}`}>Hours / Scheduling</h2>
        <p className={`${styles.p}`}>I am typically in the shop Tuesdays through Saturdays but this varies due to my appointment schedule. If you want to come in for a consultation I am happy to meet with you, just give me a heads up and we can work around my appointments. I do not take walk ins at this time as I typically schedule in advance.</p>
        <p className={`${styles.p}`}>We typically schedule a few months in advance due to demand.</p>
    </Layout>
    )
}

export default contact;