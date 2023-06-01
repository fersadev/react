import { useEffect, useState } from 'react';
import './App.css';
import { useCatImage } from './hooks/useCatImage';
import { getRandomFact } from './services/get_random_fact';

const CATAAS_URL = 'https://cataas.com';


 function App() {
  const [fact, setFact] = useState();
  const {imageUrl} = useCatImage({fact});
  //petición fact gatos
  useEffect(()=>{
      getRandomFact().then(setFact);
  },[]);
  const handleClick = async()=>{
    const newFact = await getRandomFact();
    setFact(newFact);
  }
  return (
    <main>
      <button onClick={handleClick}>Generar imagen de gato random</button>
     <h1>App de gatos</h1>
     {fact && <p>{fact}</p>}
     {imageUrl && <img src={CATAAS_URL+imageUrl} alt={`Imagen retornada con 3 palabras de ${fact}`} />}
    </main>
  )
}

export default App
