import Layout from 'components/layout';
import React from 'react';
import galleryStyles from 'styles/gallery.module.css';
import styles from 'styles/general.module.css';

const gallery = () => {
  const imageList = [
    { src: '/chimp.jpg', url: 'https://www.instagram.com/p/CK_oWZPMEJU/?igshid=12a67gg7yla34' },
    { src: '/tiger2.jpg', url: 'https://www.instagram.com/p/CLwdjIDsYBf/?igshid=1e3wrd6ekjasv' },
    { src: '/honeyBees.jpg', url: 'https://www.instagram.com/p/CGfUhuWgv3s/?igshid=1pob02v17gbka' },
    { src: '/lady.jpg', url: 'https://www.instagram.com/p/CMIAx-NgWRj/?igshid=1fwwyamen3o3u' },
    { src: '/flowers2.jpg', url: 'https://www.instagram.com/p/CBLWiLSA1RP/?igshid=lnxfjuueh5vn' },
    { src: '/diamondBear.jpg', url: 'https://www.instagram.com/p/B9oqh6kgRUG/?igshid=l6gp7g05my4h' },
    { src: '/dogs.jpg', url: 'https://www.instagram.com/p/B-9uUB2gRZm/?igshid=dfa39o0eavmz' },
    { src: '/birdsBerries.jpg', url: 'https://www.instagram.com/p/CHc5d2gAu4k/?igshid=6te064fqvths' },
    { src: '/spiderSkull.jpg', url: 'https://www.instagram.com/p/CHBBB1zgDrg/?igshid=1av7c5fpaivdp' },
    { src: '/beetleSnake.jpg', url: 'https://www.instagram.com/p/CHqTd0yAoR-/?igshid=qgk9yqqoy2r4' },
    { src: '/birdFace.jpg', url: 'https://www.instagram.com/p/CFmdbMZAM1g/?igshid=kgkttkidrup2' },
    { src: '/flowerBee.jpg', url: 'https://www.instagram.com/p/CF17WjpgK6f/?igshid=1h79z0ygwef7i' },
    { src: '/flowerJaguar.jpg', url: 'https://www.instagram.com/p/CEJw1FdgQvI/?igshid=kjhnnfdir8zh' },
    { src: '/birdFlowers.jpg', url: 'https://www.instagram.com/p/CD_jjEigUFS/?igshid=1ialff4tv1owc' },
    { src: '/heartFlowers.jpg', url: 'https://www.instagram.com/p/CCbyWjyg2sc/?igshid=1lzfgt2h8jov8' },
    { src: '/flowers.jpg', url: 'https://www.instagram.com/p/CCMKCWAgDXN/?igshid=1f3v3oukkb3mx' },
    { src: '/tiger.jpg', url: 'https://www.instagram.com/p/CB3FrvUgqKt/?igshid=1moabsox1swt2' },
    { src: '/flowers3.jpg', url: 'https://www.instagram.com/p/CAVToF2g9JK/?igshid=x70zemq26wxv' },
    { src: '/heartFlowers2.jpg', url: 'https://www.instagram.com/p/CAbFmdTgL52/?igshid=145ehqenpi87o' },
    { src: '/giraffe.jpg', url: 'https://www.instagram.com/p/B99fxX-g3HE/?igshid=omaez5zwxyvz' },
    { src: '/ravenSmoke.jpg', url: 'https://www.instagram.com/p/B9J0RHnA9u2/?igshid=1i0n5d1mx9sb0' },
    { src: '/ravenSkull.jpg', url: 'https://www.instagram.com/p/B813N5hFZYZ/?igshid=mk92uujkbfgq' },
    { src: '/spaceLizard.jpg', url: 'https://www.instagram.com/p/B7RG_K6gpvO/?igshid=1jejyhccy19pq' },
    { src: '/sailor.jpg', url: 'https://www.instagram.com/p/B4kweVdgcfq/?igshid=t7pssjyh2r8p' },
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
