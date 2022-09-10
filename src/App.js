import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import TinderCards from './components/Header/TinderCards/TinderCards';

function App() {
  return (
    <div className="App">
      <Header/>
      <TinderCards/>
    </div>
  );
}

export default App;
