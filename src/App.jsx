import { useState } from 'react';

import './App.css';
import { MemorizedHeader } from './Header';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  return (
    <div className="container">
      <h1>React</h1>
      <MemorizedHeader name={name} />

      <input
        placeholder='Digite seu nome'
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      

      <input
        placeholder='Digite seu email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

    </div>
  )
}

export default App
