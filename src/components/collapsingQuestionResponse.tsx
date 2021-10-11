import React, { useState } from 'react';
import faqStyles from 'styles/faq.module.css';

type FAQ = {
    question: string
    response: string
    slug?: string
  }

const collapsingQuestionResponse = ({ question, response }: FAQ) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <li key={question}>
        <button className={faqStyles.buttonCollapseExpand} onClick={() => setShowAnswer(!showAnswer)} type="button">
          <p className={faqStyles.expandIcon}>{showAnswer ? '-' : '+'}</p>
          <p className={faqStyles.question}>{question}</p>
        </button>
        <p className={`${showAnswer ? faqStyles.showAnswer : faqStyles.hideAnswer}`}>{response}</p>
      </li>
    </>
  );
};

export default collapsingQuestionResponse;
