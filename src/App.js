import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainCard />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>My React Application</h1>
    </header>
  );
}

function MainCard() {
  return (
    <div className="App-card">
      <h2>Hello, Pratik Chavan 👋</h2>
      <p>This is your sample React application deployed on Google Cloud Run 🚀</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>&copy; 2025 React Cloud Run Demo</p>
    </footer>
  );
}

export default App;
