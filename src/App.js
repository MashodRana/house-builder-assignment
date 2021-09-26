import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      {/* Adding header of the page */}
      <Header></Header>      

      {/* Adding Page content container */}
      <Container></Container>
    </div>
  );
}

export default App;
