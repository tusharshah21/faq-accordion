import { useState } from 'react'
import FaqSection from "./section/faq.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <h1>hi</h1> */}
        <FaqSection/>
      </div>
    </>
  )
}

export default App
