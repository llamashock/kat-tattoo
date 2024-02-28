import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from 'styles/general.module.css';
import headerStyles from 'styles/header.module.css';
// import 'styles/index.css'

const Header = () => {
  const router = useRouter();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const pageList = [
    { name: 'Gallery', path: '/gallery' },
    { name: 'After Care', path: '/afterCare' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const navLinks = pageList.map((page) => {
    const isCurrentPath = router.pathname === page.path;
    return (
      <li key={page.path} className={`${isCurrentPath ? headerStyles.highlightCurrentPage : ''}`}>
        <Link as={page.path} href={page.path}>
          <a className={`${styles.underlineHover} ${headerStyles.navItem}`}>{page.name}</a>
        </Link>
      </li>
    );
  });

  return (
    <h2 className={headerStyles.headerRow}>
      <Link href="/">
        <a className={headerStyles.mainTitle}>
          KAT ENGLAND TATTOO
        </a>
      </Link>
      <ul className={headerStyles.navList}>
        {navLinks}
      </ul>
      {!showMobileMenu && (
      <button className={headerStyles.hamburgerIcon} onClick={() => setShowMobileMenu(true)} type="button">
        ☰
      </button>
      )}
      {showMobileMenu && (
        <menu>
          <ul className={headerStyles.navListMobile}>
            <button
              className={headerStyles.closeMenu}
              onClick={() => setShowMobileMenu(false)}
              type="button"
            >
              X
            </button>
            {navLinks}
          </ul>
        </menu>
      )}
    </h2>
  );
};

export default Header;
