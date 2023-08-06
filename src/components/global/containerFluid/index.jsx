import React from 'react';
import './style.css';
import GamesSection from "../../global/gamesSection";
import UnderGameSection from "../../global/underGamesSection";

 const index = () => {
  return (

    <div className='container-fl'>
      <GamesSection/>
      <UnderGameSection/>
    </div>
  )
}
export default index;
