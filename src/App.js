import logo from './logo.svg';
import './App.css';
import Onboard from './components/Onboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Eden</div>
      </header>
      <Onboard/>
    </div>
  );
}

export default App;
