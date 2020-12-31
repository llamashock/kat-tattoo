import faqStyles from '../styles/faq.module.css'
import { useState } from 'react'

type FAQ = {
    question: string
    response: string
    slug?: string
  }

const collapsingQuestionResponse = ({ question, response, slug }: FAQ) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <>
        <li key={question} >
          <button className={`${faqStyles.buttonCollapseExpand}`} onClick={() => setShowAnswer(!showAnswer)}>
            <p className={`${faqStyles.expandIcon}`}>{showAnswer ? "-" : "+"}</p>
            <p className={`${faqStyles.question}`}>{question}</p>
          </button>
            <p className={`${showAnswer ? faqStyles.showAnswer : faqStyles.hideAnswer}`}>{response}</p>
        </li>
        </>
    );
  }
  
  export default collapsingQuestionResponse