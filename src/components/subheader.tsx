import MailToLink from 'components/mailToLink';
import React from 'react';
import headerStyles from 'styles/header.module.css';

const SubHeader = () => (
  <h2 className={headerStyles.subHeaderRow}>
    {/* <p>Masks are currently required in the shop due to the COVID-19 pandemic.</p> */}
    <p>
      Due to a recent cyber incident, I have lost access to my previous instagram account.
      Please contact me at
      {' '}
      <MailToLink />
      {' '}
      to continue arranging your appointment (or to create a new appointment).
    </p>
  </h2>
);

export default SubHeader;
