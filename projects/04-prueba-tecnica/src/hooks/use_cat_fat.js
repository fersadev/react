import { useEffect, useState } from "react";
import { getRandomFact } from "../services/get_random_fact";

export function useCatFact (){
    const [fact, setFact] = useState();
    //petición fact gatos
    const refreshFact =()=>{getRandomFact().then(setFact);}
    //recuperar la cita al cargar la pagina
    useEffect(refreshFact,[]);
    return {fact,refreshFact}
}