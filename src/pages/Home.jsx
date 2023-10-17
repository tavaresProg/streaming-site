import { useState, useEffect } from 'react';

import Banner from '../components/banner/Banner';
import Plans from '../components/plans/Plans';
import SerieCard from '../components/card/SerieCard';
import Accordion from '../components/accordion/Accordion';
import SearchField from '../components/search/SearchField';

import '../components/card/SeriesGrid.css';
import Footer from '../components/footer/Footer';

const seriesUrl = import.meta.env.VITE_API_SERIES;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () => {


  const [topSeries, setTopSeries] = useState([]);

  const getTopRatedSeries = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopSeries(data.results);
  }

  useEffect(() => {

    const getTopSeries = `${seriesUrl}top_rated?${apiKey}`;
    getTopRatedSeries(getTopSeries);


  }, [])

  return (

    <div className="wrapper">

      <Banner />

      <div className='container'>

        <Plans />

        <h2 className="title">
          Subscribe to get the best we have to offer</h2>
        <h3 className='subtitle'>
          +1000 Series to watch without ads.</h3>
        <div className="series-container">
          {topSeries.length === 0 && <p>Loading...</p>}
          {topSeries.length > 0 &&
            topSeries.slice(0, 9).map((serie) => <SerieCard key={serie.id} serie={serie} />)}
        </div>
      </div>

      <SearchField />

      <Accordion />

      <Footer/>

    </div>
  )
}

export default Home