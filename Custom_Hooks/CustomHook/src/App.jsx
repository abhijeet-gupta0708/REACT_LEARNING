import { useState } from 'react'
import InputBox from './InputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="bg-red-500 flex items-center text-center justify-center text-2xl">Custom Hook</h1>
    <InputBox />
    </>
  )
}

export default App
