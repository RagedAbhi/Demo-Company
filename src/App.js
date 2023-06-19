import './App.css';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Main from './components/Main';
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@600&display=swap" rel="stylesheet"></link>

function App() {
  return (
    <div className="App">
      <Navbar />
      <Topbar />
      <Main />
    </div>
  );
}

export default App;
