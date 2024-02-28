import Layout from 'components/layout';
import React from 'react';
import galleryStyles from 'styles/gallery.module.css';
import styles from 'styles/general.module.css';

const gallery = () => {
  const imageList = [
    { src: '/badgerLantern.jpeg', url: '' },
    { src: '/bearClothes.jpeg', url: '' },
    { src: '/birdBeeFlowerSnail.jpeg', url: '' },
    { src: '/birdSparkles.jpeg', url: '' },
    { src: '/catSunflower.jpeg', url: '' },
    { src: '/frogMouse.jpeg', url: '' },
    { src: '/frogPipe.jpeg', url: '' },
    { src: '/gnomeMushroom.jpeg', url: '' },
    { src: '/ladybudgBerries.jpeg', url: '' },
    { src: '/mushroomOwl.jpeg', url: '' },
    { src: '/teacupFlower.jpeg', url: '' },

    { src: '/nordRunesFace.jpeg', url: 'https://www.instagram.com/p/CmO7eibLrnL/' },
    { src: '/bumblebee.jpeg', url: 'https://www.instagram.com/p/Cd5jvl8ryl6/' },
    { src: '/lambTiger.jpeg', url: 'https://www.instagram.com/p/CfBeKlOOJkZ/' },
    { src: '/cornFlower.jpeg', url: 'https://www.instagram.com/p/CmEhPoHrGrO/' },
    { src: '/flowersArm2.jpeg', url: 'https://www.instagram.com/p/CmEhPoHrGrO/' },
    { src: '/owlFlower.jpeg', url: 'https://www.instagram.com/p/ClY6zOdLSjS/' },
    { src: '/ladybugBerries.jpeg', url: 'https://www.instagram.com/p/CktcRwwJDP1/' },
    { src: '/geoFlowers.jpeg', url: 'https://www.instagram.com/p/Cka72axuY37/' },
    { src: '/leopardFlower.jpeg', url: 'https://www.instagram.com/p/CeD47fhAwKy/' },
    { src: '/flowersArm.jpeg', url: 'https://www.instagram.com/p/Cmt_vSvLlIh/' },
    { src: '/foxFlower.jpeg', url: 'https://www.instagram.com/p/ChR2A0iuzwP/' },
    { src: '/catDiamond.jpeg', url: 'https://www.instagram.com/p/Cd8UP09rxGm/' },
    { src: '/neverHorse.jpeg', url: 'https://www.instagram.com/p/Cm9Nu-hrBgN/' },
  ];

  const images = imageList.map((image) => (
    <li key={image.src} className={galleryStyles.imageItem}>
      <img src={image.src} alt="tattoo-example" className={galleryStyles.image} />
      {/* <Link as={image.url} href={image.url}>
        <div>
          <img src={image.src} alt="tattoo-example" className={galleryStyles.image} />
        </div>
      </Link> */}
    </li>
  ));
  return (
    <Layout>
      <h1 className={styles.h1}>Gallery</h1>
      <h2 className={styles.h2}>Previous tattoos and artwork</h2>
      <ul className={galleryStyles.listImages}>{images}</ul>
    </Layout>
  );
};

export default gallery;
