import FirstPage from './components/Firstpage';
import Nav from './components/NavBar';
import Bio from './components/Bio';
import Examp from './components/Example';
import Email from './components/Email'
import './styles/Scroll.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <FirstPage />
      <Bio />
      <Examp />
      <Email/>
    </div>
  );
}

export default App;
