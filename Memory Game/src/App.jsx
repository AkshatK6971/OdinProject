import Heading from './heading'
import PokemonList from './pokemon'
import { useState } from "react";


function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  return (
    <div className="container">
      <Heading score={score} bestScore={bestScore}/>
      <PokemonList score={score} bestScore={bestScore} setBestScore={setBestScore} setScore={setScore}/>
    </div>
  )
}

export default App
