import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import CookieNotice from './CookieNotice'


function App() {
  

  return (
    <div className="App">
      <CookieNotice />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <Footer />
      </header>
    </div>
  );
}

export default App;
