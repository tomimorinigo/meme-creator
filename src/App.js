import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const[topLine, setTopLine] = useState('');
  const[bottomLine, setBottomLine] = useState('');
  const[meme, setMeme] = useState('fire');

  const onChangeTop = (event) => { setTopLine(event.target.value); }
  const onChangeBottom = (event) => { setBottomLine(event.target.value); }
  const onChangeSelect = (event) => { setMeme(event.target.value); }

  const exportMeme = () => {
  
    html2canvas(document.querySelector(".meme-creator")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });

  }

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <select onChange={onChangeSelect} id="meme-picker">
        <option value="fire">Burning House</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />

      <input onChange={onChangeTop} type="text" placeholder='Top Line' id="top-line" />
      <input onChange={onChangeBottom} type="text" placeholder='Bottom Line' id="bottom-line" /> <br />
      
      <button type="submit" onClick={exportMeme}>Export</button>
    
      <div className="meme-creator">
        <span id='top-line-span'>{topLine}</span>
        <span id='bottom-line-span'>{bottomLine}</span>
        <img src={"/img/" + meme + ".jpg"} alt={""+meme} id='img-meme'/>
      </div>
    </div>
  );
}

export default App;
