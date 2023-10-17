import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import SerieCard from "../../components/card/SerieCard";
import Footer from "../../components/footer/Footer"

import './Serie.css';
import Loading from "../../components/loading/Loading";

const seriesUrl = import.meta.env.VITE_API_SERIES;
const apiKey = import.meta.env.VITE_API_KEY;


const Serie = () => {

  const { id } = useParams();
  const [serie, SetSerie] = useState(null);

  const getSerie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    SetSerie(data);
  }

  useEffect(() => {
    const serieUrl = `${seriesUrl}${id}?${apiKey}`;
    getSerie(serieUrl);
  }, [])

  return (
    <div className="serie-page">
      {serie ? (<>
        <SerieCard serie={serie} showLink={false} />
        <div className="info">
          <p className="genre"> {serie.genres.map((genre) => genre.name).join(", ")}</p>
          <p><strong>Total Seasons:</strong> {serie.number_of_seasons}</p>
          <p><strong>Total episodes:</strong> {serie.number_of_episodes}</p>
          <p className="overview">{serie.overview}</p>
        </div>
        <Footer/>
      </>) : (<Loading/>)}
    </div>
  )
}

export default Serie