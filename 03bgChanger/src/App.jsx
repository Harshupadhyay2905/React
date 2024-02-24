import { useState } from "react"


function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>


      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">


        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">

          <button
            onClick={() => setColor('red')}
            className="outlinr-none px-3 py1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}>Red</button>

          <button
            onClick={() => setColor('blue')}
            className="outlinr-none px-3 py1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}>Blue</button>

          <button
            onClick={() => setColor('green')}
            className="outlinr-none px-3 py1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}>Green</button>

          <button
            onClick={() => setColor('olive')}
            className="outlinr-none px-3 py1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}>Olive</button>


          <button
            onClick={() => setColor('grey')}
            className="outlinr-none px-3 py1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "grey" }}>Grey</button>

          <button
            onClick={() => setColor('yellow')}
            className="outlinr-none px-3 py1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}>Yellow</button>

          <button
            onClick={() => setColor('purple')}
            className="outlinr-none px-3 py1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}>Purple</button>


          <button
            onClick={() => setColor('white')}
            className="outlinr-none px-3 py1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "white" }}>White</button>

          <button
            onClick={() => setColor('black')}
            className="outlinr-none px-3 py1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}>Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
