import './App.css';
import { useCatImage } from './hooks/use_cat_Image';
import { useCatFact } from './hooks/use_cat_fat';




 function App() {
  const {fact, refreshFact} = useCatFact();
  const {imageUrl} = useCatImage({fact});
  
  const handleClick = async()=>{
    refreshFact();
  }
  return (
    <main>
      <button onClick={handleClick}>Generar imagen de gato random</button>
     <h1>App de gatos</h1>
     {fact && <p>{fact}</p>}
     {imageUrl && <img src={imageUrl} alt={`Imagen retornada con 3 palabras de ${fact}`} />}
    </main>
  )
}

export default App
