const PokemonCard = ({pokemonData}) => {
  return (
   <>
    <li className='pokemon-card'>
      <figure>
         < img className="pokemon-image" src={pokemonData.sprites.other.dream_world.front_default}alt="curData.name" />
      </figure>
      <h1 className="pokemon-name">{pokemonData.name}</h1>
      <div className='pokemon-highlight'>
         <p>

            {pokemonData.types.map((curType)=> curType.type.name).join(" | ")}
         </p>

      </div>
      <div className='grid-three-cols'>
         <p className='pokemon-info'>
            <span>Height:{pokemonData.height}</span>
         </p>

         <p className='pokemon-info'>
            <span>Weight:{pokemonData.weight}</span>
         </p>

         <p className='pokemon-info'>
            <span>Speed:{pokemonData.stats[5].base_stat} </span>
         </p>

      </div>
      <div className='grid-three-cols'>

      <div  className='pokemon-info'>
         <p>Attack:</p>
         <span>{pokemonData.stats[1].base_stat}</span>

      </div>

      <div className='pokemon-info'>
<p>
Experience:</p>
<span>{pokemonData.base_experience}</span>

      </div>
      <div className='pokemon-info'>
<p>
Abilities:
</p>
<span>{pokemonData.abilities
   .map((abilityInfo)=>abilityInfo.ability.name)
   .slice(0,1)
   .join(" |")
   
   }</span>

      </div>
      </div>
    </li>
    </>
  )
}

export default PokemonCard;
