import React from "react";
import Entry from "../../Components/Entry/Entry";
import SearchIcons from "../../Components/Search/SearchIcons";
import SearchInput from "../../Components/SearchInput/SearchInput";
import "./Home.css";

function Home({
  value,
  setValue,
  pokeEntry,
  valueSearch,
  pagination,
  nextUrl,
  prevUrl,
  pokedexText,
}) {
  return (
    <>
      <SearchInput
        valueSearch={valueSearch}
        value={value}
        setValue={setValue}
      ></SearchInput>
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
          <Entry pokedexText={pokedexText} pokeEntry={pokeEntry}></Entry>
        </div>
      </main>
    </>
  );
}

export default Home;
