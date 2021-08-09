import logo from './logo.svg';
import './App.css';
import {count, length}  from './number.js'

let name = 'Замира';
let isWorking = true;
let isFreelancer = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'yellow'
        }}>
        Привет!
        Меня зовут {name}.
        Мне {29} лет.
        10 лет назад мне было {29-10}.
        </p>
        <p>
          {isWorking && ' На данный момент я работаю '}
          {isFreelancer ? 'на себя' : 'в найме'}
        </p>
        <p>
        {undefined}
        {null}
        {false}
        {true}
        count * length = {count*length}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
