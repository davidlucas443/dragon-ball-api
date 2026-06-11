import { useEffect, useState } from "react";
import { Card } from "../card";
import "./style.css";
import axios from 'axios';
export const Main = () => {

  const [personagens, setPersonagens] = useState([]);

  //     useEffect(() => {
  //     fetch("https://dragonball-api.com/api/characters?limit=58")
  //     .then((res)=> res.json())
  //     .then(data => {
  //       console.log(data.items);
  //       setPersonagens(data.items);
  //     })  
  //     .catch((error) => console.error(error))
  //   }, [])

  useEffect(() => {
      axios.get("https://dragonball-api.com/api/characters?limit=58")
      .then(res => 
        {setPersonagens(res.data.items)})
      .catch(err => console.log(err))
  },[])

  return (

    <main>
        {personagens.map((personagem) => (
          <Card
            image={personagem.image}
            title={personagem.name}
            description={personagem.description}
          />

        ))}

    </main>
  );
};
