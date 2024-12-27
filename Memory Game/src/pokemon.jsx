/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function PokemonList({score, bestScore, setBestScore, setScore}){   
    const [pokemon, setPokemon] = useState([]);
    const [clickedPokemon, setClickedPokemon] = useState([]);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        async function loadPokemon(){
            setLoading(true);
            async function fetchPokemon(){
                let pokemonList = [];
                let promises = [];
                for(let i=0;i<20;i++){
                    let index = Math.floor(Math.random()*1025) + 1;
                    if(!pokemonList.includes(index)){
                        let url = "https://pokeapi.co/api/v2/pokemon/" + "" + index;
                        const response = await fetch(url);
                        const json = await response.json();
        
                        if(json.sprites.other.dream_world.front_default){
                            pokemonList.push(index);
                            promises.push({id: json.id, name: json.name, url: json.sprites.other.dream_world.front_default,});
                        }
                        else{
                            i--;
                        }
                    }    
                    else{
                        i--;
                    }
                }
        
                const fetchedPokemon = await Promise.all(promises);
                setPokemon(fetchedPokemon);
            }
            await fetchPokemon();
            setLoading(false);
        }
        loadPokemon();
    }, []);

    

    const shufflePokemon = () => {
        let array = [...pokemon];
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const handleClick = () => {
        const id = event.target.closest(".pokemon").id.split("_")[1];
        if(clickedPokemon.includes(id)){
            setClickedPokemon([]);
            setScore(0);
        }
        else{
            let newClickedPokemon = [...clickedPokemon];
            newClickedPokemon.push(id);
            setClickedPokemon(newClickedPokemon);

            let newScore = score+1;
            setScore(newScore);

            if(newScore > bestScore){
                setBestScore(newScore);
            }
        }

        let shuffledPokemon = shufflePokemon();
        setPokemon(shuffledPokemon);
    }
    
    return(
        <>
        {(loading || !pokemon) ?
            (<div className="heading">
                <div className="pokeballs">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
                    <path d="M 30 50
                        a 1 1 1 0 1 40 0
                        h-12.5
                        a 1 1 1 0 0 -15 0
                        z"
                        fill="#f00" stroke="#222"
                    ></path>
                    <circle
                        cx="50"
                        cy="50"
                        r="5"
                        fill="#222" stroke="#222"
                    ></circle>
                    <path d="M 30 50
                        a 1 1 1 0 0 40 0
                        h-12.5
                        a 1 1 1 0 1 -15 0
                        z"
                        fill="#fff" stroke="#222"
                    ></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
                    <path d="M 30 50
                        a 1 1 1 0 1 40 0
                        h-12.5
                        a 1 1 1 0 0 -15 0
                        z"
                        fill="#f00" stroke="#222"
                    ></path>
                    <circle
                        cx="50"
                        cy="50"
                        r="5"
                        fill="#222" stroke="#222"
                    ></circle>
                    <path d="M 30 50
                        a 1 1 1 0 0 40 0
                        h-12.5
                        a 1 1 1 0 1 -15 0
                        z"
                        fill="#fff" stroke="#222"
                    ></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
                    <path d="M 30 50
                        a 1 1 1 0 1 40 0
                        h-12.5
                        a 1 1 1 0 0 -15 0
                        z"
                        fill="#f00" stroke="#222"
                    ></path>
                    <circle
                        cx="50"
                        cy="50"
                        r="5"
                        fill="#222" stroke="#222"
                    ></circle>
                    <path d="M 30 50
                        a 1 1 1 0 0 40 0
                        h-12.5
                        a 1 1 1 0 1 -15 0
                        z"
                        fill="#fff" stroke="#222"
                    ></path>
                </svg>
                </div>
                <h1>Loading...</h1>
            </div>)
            :
            (<div className="pokemons">
            {pokemon.map((pokemon) => (
                <div key={pokemon.id} className="pokemon" id={`d_${pokemon.id}`} onClick={score!=20 ? handleClick : undefined}>
                    <div className="image">
                        <img src={pokemon.url}></img>
                    </div>
                    <h3>{pokemon.name}</h3>
                </div>
            ))}
            </div>)
        }
        </>
    )
}

export default PokemonList