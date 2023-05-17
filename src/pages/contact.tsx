import Layout from 'components/layout';
import MailToLink from 'components/mailToLink';
import React from 'react';
import styles from 'styles/general.module.css';

const contact = () => (
  <Layout>
    <h1 className={styles.h1}>Contact Us</h1>

    <h2 className={styles.h2}>Email</h2>
    {/* Cannot use <MailToLink /> here for some reason, it renders as a <p> element only on prod */}
    <a href="mailto:tattsbykat@gmail.com?body=General%20description%20of%20the%20tattoo:%20%0D%0A%0D%0A%20Reference%20Images:%20%0D%0A%0D%0A%20Size%20of%20the%20tattoo:%20%0D%0A%0D%0A%20Location%20of%20tattoo:%20" className={styles.link}>tattsbykat@gmail.com</a>

    {/* <h2 className={styles.h2}>On Social Media</h2>
    <a href="https://www.instagram.com/tattsbykat/" className={styles.link}>Instagram</a> */}

    <h2 className={styles.h2}>Location</h2>

    <p className={styles.p}>
      700 S. Illinois Ave. Suite A103
    </p>
    <p className={styles.p}>
      Oak Ridge, Tennessee 37830
    </p>
    {/* Can add a description here for more specific directions */}
    <p className={styles.p}>
      This is in Pine Ridge office park, turn right into the parking lot and continue down until you see building 700 on the end.
    </p>

    <h2 className={styles.h2}>Hours / Scheduling</h2>
    <p className={styles.p}>I am typically in the shop Tuesdays through Saturdays but this varies due to my appointment schedule. I do not take walk ins at this time as I typically schedule in advance.</p>
    <p className={styles.p}>We typically schedule a few months in advance due to demand.</p>

    <h2 className={styles.h2}>To request an appointment</h2>
    <p className={styles.p}>
      Please send me an email (
      <MailToLink />
      ) with the following content:
    </p>
    <p className={styles.p}>• A description of the tattoo that you would like</p>
    <p className={styles.p}>• A few reference images</p>
    <p className={styles.p}>• The size that you want the tattoo to be</p>
    <p className={styles.p}>• Where you want to get the tattoo</p>
    <p className={styles.p}>I typically respond to messages every 2-3 of days due to the amount of messages I receive. During busier times (usually around spring and summer) it may be a little bit longer.</p>
  </Layout>
);

export default contact;
