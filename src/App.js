import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import Toolbar from './components/toolbar'
// import MenuBtn from './components/btn_menu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Toolbar>
          <MenuBtn/>
        </Toolbar> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button>Don't click me</button>
      </header>
    </div>
  );
}

export default App;
