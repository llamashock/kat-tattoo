import Layout from 'components/layout';
import React, { useState } from 'react';
import faqStyles from 'styles/faq.module.css';
import styles from 'styles/general.module.css';

const contact = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Layout>
      <h1 className={styles.h1}>Contact Us</h1>

      <h2 className={styles.h2}>Location</h2>

      <p className={styles.p}>
        700 S. Illinois Ave. Suite A103
      </p>
      <p className={styles.p}>
        Oak Ridge, Tennessee 37830
      </p>
      {/* Can add a description here for more specific directions */}
      <p className={styles.p}>
        This is in Pine Ridge office park, turn right into the parking lot
        and continue down until you see building 700 on the end.
      </p>

      <h2 className={styles.h2}>Hours / Scheduling</h2>
      <p className={styles.p}>
        I am typically in the shop Wednesdays through Saturdays
        but this varies due to my appointment schedule.
        I do not take walk ins at this time as I typically schedule in advance.
      </p>
      <p className={styles.p}>We typically schedule a few months in advance due to demand.</p>
      <p className={styles.p}>
        I typically respond to messages every 2-3 of days due to the amount of messages I receive.
        During busier times (usually around spring and summer) it may be a little bit longer.
      </p>

      <h1 className={styles.h1}>Terms and Scheduling</h1>

      <h2 className={styles.h2}>To request an appointment</h2>
      <h3 className={styles.h3}>Email clarity</h3>
      <p className={styles.p}>
        • A complete and concise request email is important in order to book your
        appointment in a timely manner. Not all requests are accepted, especially those that
        do not include the the requested content in the email. I like to make the scheduling process
        take as little back and forth as I can, as I stay quite busy and it may be 2-5 days before
        I can get back to you for each email.
        This means that if we have to communicate back and forth a lot,
        it may take a lot of time to book the appointment and someone else may have already
        booked the date that you are interested in by the time that we are finished communicating.
      </p>
      <h3 className={styles.h3}>Design Process</h3>
      <p className={styles.p}>
        • The best way to ensure that I take on an inquiry is to give me a good idea of what
        you are looking for and let me run with the design.
        This is where giving your artist trust comes in.
        Occasionally some customers are overly particular
        about how they want the tattoo to come out (i.e. micromanage the design process),
        and this is not my preferred design process. Not all requests are accepted,
        and I choose to focus on tattoos that inspire me
        and keep pushing me forward as an artist.
      </p>
      <h3 className={styles.h3}>Booking availability</h3>
      <p className={styles.p}>
        • Due to staying quite busy, my books are not always open. I keep my
        {' '}
        <a href="https://www.instagram.com/tatts_by_kat/" className={styles.link}>Instagram @tatts_by_kat</a>
        {' '}
        updated on when my books are open or closed.
      </p>

      <h2 className={styles.h2}>Notes Before Coming To Your Appointment:</h2>

      <h3 className={styles.h3}>Food and drink</h3>

      <p className={styles.p}>
        • Please eat before your tattoo: the longer the session,
        the more important this is. A healthy, well balanced meal is ideal as tattooing
        can effect blood sugar levels.
      </p>
      <p className={styles.p}>
        • If you have a long session, you may bring some snacks that you can eat in the lobby,
        outside, or in your car. Eating in the tattoo room is not allowed.
      </p>
      <p className={styles.p}>
        • Bring a drink with you. Some people prefer sugary drinks in
        case of blood sugar levels dropping. Generally, water is the
        best since this is the best hydrator.
      </p>

      <h3 className={styles.h3}>Skin Conditions</h3>

      <p className={styles.p}>
        • DO NOT come to the appointment sunburned. If the area that you are wanting
        tattooed is sunburnt, we will either have to move the tattoo to another location
        or we will have to reschedule. When a tattoo is done on sunburnt skin,
        the tattoo will not heal properly and it will lose a lot of ink resulting
        in a need to touch up the entire tattoo.
        Tattooing sunburnt skin also increases the pain of the tattoo,
        so if you go out in the sun prior to a tattoo (this is not ideal, but it happens)
        PLEASE wear sunscreen.
      </p>
      <p className={styles.p}>
        • If you have skin conditions in the areas where you would like to be tattooed,
        please inform me of this prior to the tattoo (eczema, acne, scars, etc.)
      </p>
      <p className={styles.p}>
        • DO NOT drink alcohol prior to the tattoo or drink in excess the night before.
        Alcohol decreases your blood clotting ability which will make you bleed more
        during your appointment. If you bleed a lot during the session,
        this will dilute the ink and the tattoo will not be able to
        look as vibrant/ saturated.
      </p>

      <h3 className={styles.h3}>Entertainment</h3>

      <p className={styles.p}>
        • Bring something to keep yourself entertained during the session:
        (a book, your phone, Rubix cube, knitting stuff, etc. ).
        I do my best work when I am concentrated and this usually
        means that I do not talk much during appointments.
        Please do not be offended by this, this is just how I know I
        can make the best tattoo for you.
      </p>

      <h3 className={styles.h3}>Thank you!</h3>

      <p className={styles.p}>
        Thank you for taking time to read this!
        I know that this is a lot of information to take in,
        but this is what I have learned works best for me over the years.
        Since my business is a one woman operation,
        I like to make things as clear to clients as I can to save everyone
        a little time!
      </p>

      {/* FAQ-type checkbox dropdown element here to reveal email */}
      <button className={faqStyles.buttonCollapseExpand} onClick={() => setShowAnswer(!showAnswer)} type="button">
        <p className={faqStyles.expandIcon}>{showAnswer ? '☑︎' : '☐'}</p>
        <p className={faqStyles.question}>
          Click here to agree to these terms, and view my contact email below.
        </p>
      </button>
      <div className={`${showAnswer ? faqStyles.showAnswer : faqStyles.hideAnswer}`}>
        <h2 className={styles.h2}>Email</h2>
        {/* Cannot use <MailToLink /> here for some reason, it renders as a <p> element only on prod */}
        <p className={styles.p}>
          This links to my email with a template to include the following content:
          {' '}
          <a href="mailto:tattsbykat@gmail.com?body=Your%20name:%20%0D%0A%0D%0A%20Tattoo%20placement:%20%0D%0A%0D%0A%20Approximate%20size%20of%20tattoo%20(in%20inches):%20%0D%0A%0D%0A%20General%20description%20of%20the%20tattoo:%20%0D%0A%0D%0A%20Attach%20reference%20images%20(I%20draw%20all%20my%20own%20designs,%20these%20are%20for%20understanding%20what%20elements%20you%20like%20from%20the%20references):" className={styles.link}>tattsbykat@gmail.com</a>
        </p>
        <p className={styles.p}>
          • A short description of the tattoo that you would like.
          Keeping this brief is important, as too many extra details
          makes it hard to find the key elements.
          For example, the backstory of the tattoo might be important
          but unless it is part of the tattoo it can make the description
          more ambiguous.
        </p>
        <p className={styles.p}>
          • A few reference images. I just use these as a starting point,
          to see the key elements that you like.
          I like to add my own flair to my tattoos and I will not copy
          {' another artist\'s work. If you would like an exact replica of a'}
          tattoo or drawing, I am not the artist for you.
        </p>
        <p className={styles.p}>• The size that you want the tattoo to be.</p>
        <p className={styles.p}>• Where you want to get the tattoo.</p>
      </div>
    </Layout>
  );
};
export default contact;
