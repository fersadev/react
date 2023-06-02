import { useEffect, useState } from "react";

const CATAAS_URL = 'https://cataas.com';
export function useCatImage({fact}){
    const [imageUrl,setImageUrl] = useState();
    useEffect(()=>{
      if(!fact) return;
      const firstWords = fact.split(' ').slice(0,3).join(' ');
  
      fetch(`${CATAAS_URL}/cat/says/${firstWords}?json=true`)
        .then(resp=> ( resp.json()))
        .then(data=>{
          const {url} = data;
          setImageUrl(url);
        })
  
    },[fact]);
    return {imageUrl:CATAAS_URL+imageUrl};
  }