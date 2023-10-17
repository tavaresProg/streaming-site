import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchField from '../components/search/SearchField';
import SerieCard from "../components/card/SerieCard";
import Loading from "../components/loading/Loading"

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "../components/card/SeriesGrid.css";
import Footer from "../components/footer/Footer";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [series, setSeries] = useState([]);
  const query = searchParams.get("q");

  const getSearchedSeries = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    const seriesWithValidPoster = data.results.filter((serie) => serie.poster_path);

    setSeries(seriesWithValidPoster);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedSeries(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
    <SearchField />
    <h2 className="title">
      Titles available with: <span className="query-text">{query}</span>
    </h2>
    <div className="series-container container">
      {series.length > 0 ? (
        series.map((serie) => <SerieCard key={serie.id} serie={serie} />)
      ) : (
        <Loading /> 
      )}
    </div>
    <Footer/>
  </div>
  );
};

export default Search;