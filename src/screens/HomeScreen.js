import React from 'react'
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Row from '../components/Row';
import requests from '../Requests';
import './HomeScreen.css';

function HomeScreen() {
  return (
    <div className='homeScreen'>
       {/** Nav */}
       <Nav />
    
       {/** Banner */}
       <Banner />

       {/** Row - 1 */}
       <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
       />
       <Row
        title="TRENDING"
        fetchUrl={requests.fetchTrending}
       />
       <Row 
        title="TOP RATED"
        fetchUrl={requests.fetchTopRated}
       />
      
    </div>
  )
}

export default HomeScreen