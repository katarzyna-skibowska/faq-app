import { useState } from "react";
import arrowIcon from "./icon-arrow-down.svg";
import styles from "./Answers.module.css";

const Answers = (props) => {
  const [showAnswers, setShowAnswers] = useState(false);

  function showMore() {
    setShowAnswers(!showAnswers);
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={showMore}>
        {props.title}
        <img
          className={styles.arrow}
          style={{ transform: showAnswers ? "rotate(180deg)" : "" }}
          alt="arrow-icon"
          src={arrowIcon}
        />
      </button>
      {showAnswers && <p className={styles.answer}>{props.description} </p>}
    </div>
  );
};

export default Answers;
