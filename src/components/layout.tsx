import Footer from 'components/footer';
import Header from 'components/header';
import Meta from 'components/meta';
// import SubHeader from 'components/subheader';
import React from 'react';
import styles from 'styles/general.module.css';

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div className={styles.font}>
    <Meta />
    <Header />
    {/* <SubHeader /> */}
    <main className={styles.body}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
