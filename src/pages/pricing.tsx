import Layout from 'components/layout';
import Link from 'next/link';
import React from 'react';
import styles from 'styles/general.module.css';

const pricing = () => (
  <Layout>
    <h1 className={styles.h1}>Pricing</h1>
    <p className={styles.p}>
      Prices vary depending on complexity and size of the tattoo.
      Pieces will be priced hourly at a rate of $175/hr. The minimum price is $120.
    </p>
    <p className={styles.p}>
      {'Please '}
      <Link as="/contact" href="/contact" className={`${styles.link} ${styles.underlineHover}`}>
        contact us
      </Link>
      {' to get a quote for your tattoo.'}
    </p>
    <p className={styles.p}>
      Please note: All appointments require a non-refundable deposit of $100 or $150
      (depending on the size of the tattoo).
      The deposit will be applied to the price of the tattoo.
      If you need to reschedule, you must give more than 48 hours notice,
      and this deposit will be applied to the new appointment time.
      If proper notice is not given, your deposit will be forfeited.
      If you reschedule more than once, you may be asked to put an additional deposit.
      (If multiple sessions are required for the tattoo,
      the deposit will be applied to the last session.)
    </p>
  </Layout>
);

export default pricing;
