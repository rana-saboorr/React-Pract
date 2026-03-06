import { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';

function App() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ background: color }} className="min-h-screen flex flex-col items-center justify-center p-5 gap-10">

      {/* Background color buttons */}
      <div className="fixed top-0 left-0 w-full flex justify-center p-5 z-50">
        <div className="inline-flex w-fit flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="w-24 h-10 rounded-full text-white bg-red-600">Red</button>
          <button onClick={() => setColor("black")} className="w-24 h-10 rounded-full text-white bg-black">Black</button>
          <button onClick={() => setColor("blue")} className="w-24 h-10 rounded-full text-white bg-blue-600">Blue</button>
          <button onClick={() => setColor("orange")} className="w-24 h-10 rounded-full text-white bg-orange-400">Orange</button>
          <button onClick={() => setColor("yellow")} className="w-24 h-10 rounded-full text-white bg-yellow-300">Yellow</button>
          <button onClick={() => setColor("green")} className="w-24 h-10 rounded-full text-white bg-green-500">Green</button>
          <button onClick={() => setColor("pink")} className="w-24 h-10 rounded-full text-white bg-pink-300">Pink</button>
        </div>
      </div>

      {/* Cards container */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
        {/* Left card → useEffect */}
        <Card type="effect" />

        {/* Right card → useCallback */}
        <Card type="callback" />
      </div>
    </div>
  )
}

export default App;
