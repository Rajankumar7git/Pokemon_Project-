import PokemonCard from"../src/PokemonCard";
import { useEffect ,useState} from "react";


const Pokemon = () => {
   const [pokemon, setPokemon] = useState([]);
   const[loading, setLoading]=useState(true);
   const [error, setError]=useState(null);
   const [search, setSearch] = useState("");
  


const API="https://pokeapi.co/api/v2/pokemon?limit=100";


const fatchPokemon=async()=>{
try {
   const res = await fetch(API);
   const data=await res.json();
   //console.log(data);


const detlsPokemonData=data.results.map(async(curData)=>{
const res = await fetch(curData.url);
const data =await res.json();
return data;

});
//console.log(detlsPokemonData);


const dtlRespeses= await Promise.all(detlsPokemonData);
console.log(dtlRespeses);
setPokemon(dtlRespeses);
setLoading(false);
} catch (error) {
   console.log(error);
   setLoading(false);
   setError(error);
   
}
}



useEffect(()=>{
   fatchPokemon();
},[]);

//search functionlity//
const searchData = pokemon.filter((curData)=>curData.name.toLowerCase().includes(search.toLowerCase())
);










if(loading){
  return <div>
    <h1>Loading Cards Please Wait...</h1>
  </div>
}
if(error){
  return<div>
    <h2>{error.message}</h2>
  </div>
}

  return (
  <>
  
  <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>
        <div className="pokemon-search"> 
          <input type="text" placeholder="search Pokemon.." value={search} onChange={(e)=>setSearch(e.target.value)}/>
          
           </div>
        <div>
          <ul className="cards">
            {searchData.map((curData)=>{
              return <PokemonCard key={curData.id} pokemonData={curData}/>
            
               })}
          </ul>
        </div>
      </section>
  
  </>
  );
};

export default Pokemon;
