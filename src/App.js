import logo from './logo.svg';
import './App.css';
import QRCodeGenerator from './Component/QRCode';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <QRCodeGenerator/>
        
      </header>
    </div>
  );
}

export default App;
