import CollapsingQuestionResponse from 'components/collapsingQuestionResponse';
import Layout from 'components/layout';
import React from 'react';
import faqStyles from 'styles/faq.module.css';
import styles from 'styles/general.module.css';

type FAQ = {
  question: string
  response: string
  slug?: string
}

const faq = () => {
  const pageList: Array<FAQ> = [
    { question: 'Do you design custom tattoos?', response: 'Yes! I love to collaborate with my clients and figure out a design that best suits their personal taste and flows well in the location of their choosing. It is good to start off with an idea or an example photo of something close to what you are looking for.' },
    { question: 'Do tattoos hurt?', response: 'Pain is always relative, the location of the tattoo, type of tattoo and a person’s individual tolerance for pain can affect how painful a tattoo will be. Many compare the feeling to a ‘hot scratching feeling’.' },
    { question: 'Can I get a tattoo if I’m sick?', response: 'It is not recommended to get a tattoo if you are sick, your body needs white blood cells to heal your tattoo which is hard for your body to do if it is already using it’s energy to combat sickness. If you are not feeling well before your appointment, it is best to reschedule the appointment for a time that you are feeling well.' },
    { question: 'Are tiny tattoos a good idea?', response: 'The smaller the tattoo, more likely the lines are to bleed together over time. This happens naturally and there is nothing than can prevent this. If you are interested in getting a very small tattoo, make sure that your expectations are realistic. The smaller the tattoo, the simpler the tattoo will be so that they stay looking good over time.' },
    { question: 'Tips on how to prep for your appointment?', response: 'Always avoid drinking the night before and eat a good meal before coming in and drink plenty of water, if it is a longer appointment you may want to bring a snack/drink' },
    { question: 'How long does it take a tattoo to heal?', response: 'Healing times can vary depending on each individual but it typically takes 2-4 weeks. During this time, moisturize your tattoo (unscented white lotion is what I recommend) and keep it clean. While your tattoo is healing, it is important to keep it out of the sun, as healing tattoos are more likely to fade quickly in the sun. Do not swim or soak the tattoo during this time, this can impede on the healing process.' },
    { question: 'Do you do cover-up tattoos?', response: 'I do sometimes, if it is a fairly small piece and/ or faded and I feel comfortable to do so. They are much trickier to do than a regular piece as there are many challenges involved in this process. Feel free to send a picture of your tattoo if you are unsure but it is quite possible that I will pass on this, as I want your tattoo to look as good as it can!' },
    { question: 'Are you licensed? Why does that matter?', response: 'I am an officially licensed tattoo artist in the state of Tennessee. This is important, foremost because this ensures that all health and safety procedures are followed. It further ensures that your tattoo quality meets or exceeds the standards set by Tennessee. Even if you do not end up coming here, you should ensure your tattoo artist is officially licensed.' },
  ];

  const faqList = pageList.map((faqItem) => (
    <CollapsingQuestionResponse
      question={faqItem.question}
      response={faqItem.response}
      key={faqItem.question}
    />
  ));

  return (
    <Layout>
      <div className={faqStyles.pageContainer}>
        <h1 className={styles.h1}>FAQ</h1>
        <ul className={faqStyles.listColumn}>
          {faqList}
        </ul>
      </div>
    </Layout>
  );
};

export default faq;
