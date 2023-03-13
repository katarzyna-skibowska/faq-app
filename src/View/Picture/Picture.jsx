import picture from "./faq-picture.svg";
import styles from "./Picture.module.css";

const Picture = () => {
  return <img className={styles.faqImage} src={picture} alt="faq-woman" />;
};

export default Picture;
