import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
let newC = (color) =>{
  setColor(color)
}

  return (
  <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
     <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
       <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
           <button type="button" className="btn btn-primary" onClick={()=>{newC('blue')}}>Blue</button>
           <button type="button" className="btn btn-success" onClick={()=>{newC('green')}}>Green</button>
           <button type="button" className="btn btn-warning" onClick={()=>{newC('yellow')}}>Yellow</button>

       </div>
     </div>
  </div>
  )
}

export default App
