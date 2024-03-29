import Head from 'next/head';
// import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import React from 'react';

const Meta = () => (
  <Head>
    <meta property="og:title" content="Kat England Tattoo" />
    <meta property="og:description" content="A gallery of work by Kat England." />
    <meta property="og:image" content="https://tattsbykat.com/main.jpg" />
    <meta property="og:url" content="https://tattsbykat.com/" />
    <meta name="twitter:card" content="https://tattsbykat.com/main.jpg" />
    <meta property="og:site_name" content="Kat England Tattoo, Inc." />
    <meta name="twitter:image:alt" content="A gallery of work by Kat England." />

    <title>Kat England Tattoo</title>

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/favicon/safari-pinned-tab.svg"
      color="#000000"
    />
    <link rel="shortcut icon" href="/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
    <meta name="theme-color" content="#000" />
    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    {/* <meta charset="utf-8">
      <meta httpEquiv="Content-Security-Policy content={}"></meta> */}
    {/* <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      /> */}
    {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
  </Head>
);

export default Meta;
