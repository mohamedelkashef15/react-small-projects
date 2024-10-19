import questions from "../data";
import { IQuestion } from "../interfaces";
import Question from "./Question";
import styles from "./Questions.module.scss";

function Questions() {
  return (
    <div className={styles.questions}>
      <h1>Questions</h1>
      {questions.map((question: IQuestion) => {
        return <Question key={question.id} title={question.title} info={question.info} />;
      })}
    </div>
  );
}

export default Questions;
