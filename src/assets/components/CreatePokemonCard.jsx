const CreatePokemonCard =({pokemon}) => {

return (
 <div>
    <h1>{pokemon.name}</h1>
    <img src={pokemon.imgSrc}/>
 </div>
)

}





export default CreatePokemonCard;