import Container from './components/container/Container';
import Card1 from './components/cards/Card1';
import Card2 from './components/cards/Card2';
import Card3 from './components/cards/Card3';
import Card4 from './components/cards/Card4';
import Card5 from './components/cards/Card5';
import Card6 from './components/cards/Card6';
import Card7 from './components/cards/Card7';
import Card8 from './components/cards/Card8';
import './App.css';

function App() {
  return (
    <>
      <Container title={'Cards'}>
        <Card1></Card1>
        <Card2></Card2>
      </Container>
      <Container>
        <Card3></Card3>
        <Card4></Card4>
      </Container>
      <Container>
        <Card5></Card5>
        <Card6></Card6>
      </Container>
      <Container>
        <Card7></Card7>
        <Card8></Card8>
      </Container>
    </>
  );
}

export default App;
