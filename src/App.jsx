import "./App.css";
import GetData from "./components/GetData/GetData";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function App() {
  const [page, setpage] = useState(1);
  const [search, setSearch] = useState("");

  function handleChange(p, e) {
    setpage(e);
  }
  return (
    <>
      <div className="app--container">
        <div id="nav--container">
          <div id="searchbox--container">
            <input
              id="searchbox"
              placeholder="Search character"
              onChange={(env) => setSearch(env.target.value)}
            />
          </div>
        </div>
        <center>
          <img src={"logo.png"} alt="logo" onClick={()=>window.location.reload()} style={{ width: "200px" }} />
        </center>
        <div id="character--container">
          <GetData page={page} search={search} />
        </div>
        <div id="pagination--container">
          {search == ""?<div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Stack spacing={2}>
              <Pagination
                count={5}
                bgcolor="red"
                color="primary"
                sx={{ backgroundColor: "#292c2e", borderRadius: "3px"}}
                variant="text"
                onChange={handleChange}
              />
            </Stack>
          </div>:null}
        </div>
      </div>
    </>
  );
}

export default App;
