import { useState } from 'react'
import './App.css'
import Captcha  from './Components/Captcha'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Captcha />
  )
}

export default App
