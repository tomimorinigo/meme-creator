import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <select id="meme-picker">
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />

      <input type="text" placeholder='Top Line' id="top-line" /> <br />
      <input type="text" placeholder='Bottom Line' id="bottom-line" /> <br />
      
      <button type="submit">Export</button>
    
      <div className="meme-creator">
        <span></span>
        <span></span>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default App;
