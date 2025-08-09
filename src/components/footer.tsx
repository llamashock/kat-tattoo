import Link from 'next/link';
import React from 'react';
import footerStyles from 'styles/footer.module.css';
import styles from 'styles/general.module.css';

const Footer = () => (
  <footer className={footerStyles.footerRow}>
    <h3 className={footerStyles.license}>
      Kat England Tattoo © 2023
    </h3>
    <div className={footerStyles.privacyTermsRow}>
      <Link as="/privacyTerms" href="/privacyTerms" className={`${footerStyles.privacyTerms} ${styles.underlineHover}`}>
        Privacy Policy
      </Link>
      <Link as="/privacyTerms" href="/privacyTerms" className={`${footerStyles.privacyTerms} ${styles.underlineHover}`}>
        Terms of Use
      </Link>
    </div>
  </footer>
);

export default Footer;
