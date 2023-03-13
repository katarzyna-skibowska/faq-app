import Answers from "../../View/Answers/Answers";

const Container = ({ faqData }) => {
  return <Answers title={faqData.title} description={faqData.description} />;
};

export default Container;
