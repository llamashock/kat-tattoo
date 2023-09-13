import Layout from 'components/layout';
import Link from 'next/link';
import React from 'react';
import styles from 'styles/general.module.css';

const pricing = () => (
  <Layout>
    <h1 className={styles.h1}>Pricing</h1>
    <p className={styles.p}>Pricing varies depending on the tattoo, bigger or more complex pieces (such as sleeve work) are typically charged hourly at $125 an hour. Smaller pieces are typically priced per piece, which can vary greatly. The minimum price is $100.</p>
    <p className={styles.p}>
      {'Please '}
      <Link as="/contact" href="/contact">
        <a className={`${styles.link} ${styles.underlineHover}`}>contact us</a>
      </Link>
      {' to get a quote for your tattoo.'}
    </p>
    <p className={styles.p}>
      Please note: All appointments require a non-refundable deposit of $100,
      which will be applied toward the price of the tattoo.
      If you need to reschedule, you must give more than 48 hours notice,
      and this deposit will be applied to the new appointment time.
      If proper notice is not given, your deposit will be forfeited.
      (If multiple sessions are required for the tattoo,
      the deposit will be applied to the last session.)
    </p>
  </Layout>
);

export default pricing;
