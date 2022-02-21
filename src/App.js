import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [fruit, setFruit] = useState('Anor')
  const [date, setDate] = useState('')

  useEffect(() => {
    console.log('useEffect ran');
    console.log(fruit);
  }, [date])
    return (
    <div className="App">
      <p>{date}</p>
      <p>{fruit}</p>
      <button onClick={() => fruit === 'Anor' ? setFruit('Behi') : setFruit('Anor')}>change fruit name</button>
      <button onClick={() => setDate(new Date().toLocaleTimeString())}>change dates</button>
    </div>
  );
}

export default App;
