import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount((count)=>count+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={add}>{count}</h1>
      </header>
    </div>
  )
}

export default App
