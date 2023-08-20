import Container from 'components/container';
import Layout from 'components/layout';
import Link from 'next/link';
import React from 'react';
import styles from 'styles/general.module.css';
import homeStyles from 'styles/index.module.css';

const Index = () => (
  <Layout>
    <Container>
      <div className={homeStyles.mainImageContainer}>
        <img src="/dogDiamonds.jpg" alt="Example tattoo" className={homeStyles.mainImage} />
        <img src="/birdLantern.jpg" alt="Example sketch" className={homeStyles.mainImage} />
      </div>
      <p className={styles.p}>Kat is best known for black and grey work, specializing in organic designs like florals, and portraits of animals and people.</p>
      {/* <p className={styles.p}>
        {'To see more examples of Kat’s work, you can find her at @tattsbykat on '}
        <a href="https://www.instagram.com/tattsbykat/" className={styles.link}>Instagram</a>
        .
      </p> */}
      <p className={styles.p}>
        {'To schedule an appointment, please read our '}
        <Link as="/contact" href="/contact">
          <a className={`${styles.link} ${styles.underlineHover}`}>Policies and Contact Us</a>
        </Link>
        {' page. When creating an appointment, we will require'}
        {' a description of the tattoo, the size and placement of the tattoo.'}
        {' It is preferred to include at least one reference picture.'}
      </p>
    </Container>
  </Layout>
);

export default Index;

// export const getStaticProps = async () => {

//   return {
//     props: null ,
//   }
// }
