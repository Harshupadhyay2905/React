import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("");
  const passwordRef=useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    } if (characterAllowed) {
      str += "!@#$%^&*(){}?><>~"
    }

    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(index);
    }
    setPassword(pass);
  },[length,numberAllowed,characterAllowed,setPassword])
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,characterAllowed,passwordGenerator])
  

const copyToClipboard=()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)
}


return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <div className='flex shadow,rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className=' outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}></input>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>

            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }} />

            <label htmlFor="">Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>

            <input type='checkbox'
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }} />

            <label htmlFor="numberInput">Numbers </label>
          </div>
          <div><input type="checkbox"
            defaultChecked={characterAllowed}
            id='characterInput'
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }} />

            <label htmlFor="characterInput">Characters </label>
          </div>

        </div>
      </div>

      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}
export default App
