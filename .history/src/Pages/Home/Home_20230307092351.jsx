import React from "react";
import Entry from "../../Components/Entry/Entry";
import SearchIcons from "../../Components/Search/SearchIcons";
import "./Home.css";

function Home({ pokeEntry, valueSearch, pagination, nextUrl, prevUrl }) {
  return (
    <>
      <main className="main">
        <div className="pokeIcons">
          <SearchIcons
            pagination={pagination}
            valueSearch={valueSearch}
            pokeEntry={pokeEntry}
            nextUrl={nextUrl}
            prevUrl={prevUrl}
          ></SearchIcons>
        </div>
        <div className="entry">
          <Entry pokeEntry={pokeEntry}></Entry>
        </div>
      </main>
    </>
  );
}

export default Home;
