import { useEffect, useState } from "react";

export default function GetApi() {
  const [characterListPages, setCharacterListPages] = useState([]);
  const characterList = [];
  var [Search, setSearch] = useState();

  useEffect(() => {
    for (var i = 1; i <= 42; i++) {
      const fetchData = async () => {
        const data = await fetch(
          `https://rickandmortyapi.com/api/character?page=${i}`
        ).then((res) => res.json());
        setCharacterListPages((oldArray) => [...oldArray, data.results]);
      };

      fetchData().catch((Error) => console.log(Error));
    }
  }, []);

  characterListPages.forEach(function (characterListPages) {
    for (var n = 0; n <= 19; n++) {
      characterList.push(characterListPages[n]);
    }
  });

  if (Search == undefined) {
    Search = characterList;
  }

  return (
    <>
      <nav>
        <div id="search---container">
          <input
            placeholder="Search character"
            onChange={(env) =>
              setSearch(
                characterList.filter((character) =>
                  character?.name
                    .toLowerCase()
                    .includes(env.target.value.toLowerCase())
                )
              )
            }
          />
          <button className="material-symbols-outlined">search</button>
        </div>
      </nav>
      {Search.map((characterList) => (
        <div className="card--container">
          <article className="face front">
            <img src={characterList?.image} alt={characterList?.name} />
            <h3>{characterList?.name}</h3>
          </article>
          <article className="face back"></article>
        </div>
      ))}
    </>
  );
}
