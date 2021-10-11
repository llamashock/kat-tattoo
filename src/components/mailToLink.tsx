import React from 'react';
import styles from 'styles/general.module.css';

const mailToLink = () => (
  <a href="mailto:tattsbykat@gmail.com?subject=New%20Appointment&body=General%20description%20of%20the%20tattoo:%20%0D%0A%0D%0A%20Reference%20Images:%20%0D%0A%0D%0A%20Size%20of%20the%20tattoo:%20%0D%0A%0D%0A%20Location%20of%20tattoo:%20" className={styles.link}>tattsbykat@gmail.com</a>
);

export default mailToLink;
