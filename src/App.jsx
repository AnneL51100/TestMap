import pokemonList from "./assets/datas/PokemonList"
import CreatePokemonCard from "./assets/components/CreatePokemonCard"

const App=() => {
  return (
    <div>
    {pokemonList.map((pokemon) => (
      <CreatePokemonCard pokemon={pokemon} key={pokemon.id}/>
    ))}


    </div>
  )



}

export default App
