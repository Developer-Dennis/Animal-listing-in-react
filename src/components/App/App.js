import data from './data';
import AnimalCard from '../AnimalCard/AnimalCard';
import './App.css';


function App() {
  return (
   <div className="wrapper">
   <h1>Animals</h1>
   {albums.map(album => (
   <AnimalCard
   additional={animal.additional}
   diet={animal.diet}
   key={animal.name}
   name={animal.name}
   scientificName={animal.scientificName}
   size={animal.size}
   />
   ))}
   </div>
   )
  }
  export default App;