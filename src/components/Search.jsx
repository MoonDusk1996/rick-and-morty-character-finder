import { useState, useEffect } from "react";

export default function Search() {
  const [Search, setSearch] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetch(`https://rickandmortyapi.com/api/character/?name=${Search}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [Search]);
  console.log(data)

  return (
    <div id="searchbox--container">
      <input
        id="searchbox"
        placeholder="Search character"
        onChange={(env) => setSearch(env.target.value)}
      />
    </div>
  );
}
