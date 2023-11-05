import React, { useEffect, useState } from "react";
import Card from "../src/components/card"; // Asegúrate de que la importación sea correcta
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=25")
      .then(async (res) => {
        if (res.data.results) {
          const pokemonData = await Promise.all(
            res.data.results.map(async (poke) => {
              const response = await axios.get(poke.url);
              return response.data;
            })
          );
          setPokemon(pokemonData);
        } else {
          setPokemon([]);
        }
      });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pokemon.map((poke, index) => (
          <Card
            key={index}
            index={`Number of pokemon: ${index + 1}`}
            Name={poke.name}
            type={poke.types.map((type) => type.type.name).join(", ")} // Obtiene los tipos del Pokémon
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
