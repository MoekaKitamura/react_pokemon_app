import "./App.css";
import { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import Card from "./components/Card/Card";
import Navber from "./components/Navber/Navber";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loaging, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      // 各ポケモンの詳細なデータを取得
      await loadPokemon(res.results);
      setNextUrl(res.previous);
      setNextUrl(res.next);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const handleNextPage = async () => {
    if (!nextUrl) return;

    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setPrevUrl(data.previous);
    setNextUrl(data.next);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    if (!prevUrl) return;

    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setPrevUrl(data.previous);
    setNextUrl(data.next);
    setLoading(false);
  };

  return (
    <>
      <Navber />
      <div className="App">
        {loaging ? (
          <h1 className="loader">ロード中...</h1>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon}></Card>;
              })}
            </div>
            <div className="btn">
              <button onClick={handlePrevPage}>← 前へ</button>
              <button onClick={handleNextPage}>次へ →</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
