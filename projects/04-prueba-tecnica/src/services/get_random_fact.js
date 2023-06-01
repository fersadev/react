const CATFACT_URL = 'https://catfact.ninja/fact';

export const getRandomFact = async()=>{

    const resp = await fetch(CATFACT_URL);
    const data = await resp.json();
    return data.fact;
}