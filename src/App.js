import './App.css';
import Box from './Components/Box/Box';
import Container from './Components/Container/Container';
import Picture from './View/Picture/Picture';
import faqData from './faqData.js'
import BoxBlock from './Components/BoxBlock/BoxBlock';


function App() {

  return (
    <Box>
<Picture />
<BoxBlock>
<h1>FAQ</h1>
{faqData.map((question)=>{
  return(
  <Container key={question.title} faqData={question} />
  )
})}
</BoxBlock>
    </Box>
  );
}

export default App;
