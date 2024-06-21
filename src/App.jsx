import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const changeCount = () => {
    if (count < 99) {
      setCount(count + 1)
    }
  }


    const bar = () => {
      setCount(0)
    }

  return (
    <>
    <div className='contaier'>

      <div className='box'>

<div className='count-container'>
    <h1 className='count'>{count}</h1>
</div>

<div className='styl-btn'>

    <button className='btn' onClick={changeCount}>Count</button>
    <button className='btn-2' onClick={bar}>Reset</button>
</div>

      </div>

    </div>
    </>
  )
}

export default App
