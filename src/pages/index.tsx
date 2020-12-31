import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import homeStyles from '../styles/index.module.css'
import styles from '../styles/general.module.css'

const Index = () => {
  return (
    <>
      <Layout>
        <Container>
          <img src="/main.jpg" alt="main-image" className={homeStyles.mainImage}/>
          <p className={`${styles.p}`}>Kat is best known for black and grey work, specializing in organic designs like florals, and portraits of animals and people.</p>
          <p className={`${styles.p}`}>
            {"To see more examples of Kat’s work, you can find her at @tattsbykat on "}
            <a href="https://www.instagram.com/tattsbykat/" className={`${styles.link}`}>Instagram</a>
            {" or "}
            <a href="https://www.facebook.com/tattsbykat/" className={`${styles.link}`}>Facebook</a>
            {"."}
          </p>
          <p className={`${styles.p}`}>To schedule an appointment, please email <a href="mailto:tattsbykat@gmail.com?subject=New%20Appointment" className={`${styles.link}`}>tattsbykat@gmail.com</a> with at least one reference picture, a description of the tattoo, size and placement of the tattoo.</p>
        </Container>
      </Layout>
    </>
  )
}

export default Index

// export const getStaticProps = async () => {

//   return {
//     props: null ,
//   }
// }
