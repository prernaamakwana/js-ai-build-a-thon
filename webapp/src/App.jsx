import Chat from './components/Chat';



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <h1>Chat App</h1>
  <Chat />
</div>
  )
}

export default App
