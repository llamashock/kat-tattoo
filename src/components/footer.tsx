import Link from 'next/link';
import React from 'react';
import footerStyles from 'styles/footer.module.css';
import styles from 'styles/general.module.css';

const Footer = () => (
  <footer className={footerStyles.footerRow}>
    <h3 className={footerStyles.license}>
      Kat England Tattoo © 2021
    </h3>
    <div className={footerStyles.privacyTermsRow}>
      <Link as="/privacyTerms" href="/privacyTerms">
        <a className={`${footerStyles.privacyTerms} ${styles.underlineHover}`}>Privacy Policy</a>
      </Link>
      <Link as="/privacyTerms" href="/privacyTerms">
        <a className={`${footerStyles.privacyTerms} ${styles.underlineHover}`}>Terms of Use</a>
      </Link>
    </div>
  </footer>
);

export default Footer;
