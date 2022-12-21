import "./GetData.css";
import { useState, useEffect } from "react";

export const GetData = ({ page, search }) => {
  const [data, setData] = useState();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [page]);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [search]);
  return data
    ? data.map((character) => (
        <div className="character--container" key={character.id}>
          <div className="cover--container">
            <img
              src={character.image}
              style={{
                width: "100%",
                borderRadius: "3px",
              }}
            />
            <h3>{character.name}</h3>
          </div>
          <div className="info--container">
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
          </div>
        </div>
      ))
    : null;
};
export default GetData;
