import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [joke, setJoke] = useState("Press Button to Start!");
  const [buttonText, setButtonText] = useState("Start")

  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res) => res.json())
        .then((data) => setJoke(data.joke));

        setButtonText("Tickle me more!");
};

  return (
    <>
    <h4 className='text-center font-semibold mt-8'>Programming Joke Generator</h4>
    <div className="container mx-auto bg-amber-800 rounded-3xl text-center p-8 mt-6 shadow-md w-1/2">
      
      <h1 className='text-xl font-bold text-white pt-6'>{joke}</h1>
      <button class="text-center bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-full text-amber-50 mt-8 w-60 font-semibold" onClick={fetchApi}>
        {buttonText}
      </button>
    </div>    
    </>
  )
}

export default App
