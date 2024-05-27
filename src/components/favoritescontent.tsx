import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faBackwardFast, faForwardFast, faHeart } from '@fortawesome/free-solid-svg-icons';

const Favoritescontent: React.FC = () => {
  return (
    <div>
        <h1>Favourites</h1>
    <div className='Top-Bar'>
     <h2><FontAwesomeIcon icon={faHeart} className="icon" /> My Favourites</h2>
     <hr />
</div> 
<div className="cards">
        <div className="card">
          <img src="https://live.staticflickr.com/65535/52667109963_4f76301b9a_b.jpg" 
          alt="Image 4" />
          <h1><FontAwesomeIcon icon={faHeart} className="icon" /></h1>
          <h3>Leo Songs</h3>
          <p>Actor: Vijay | Movie: Leo </p>
        </div>
        <div className="card">
          <img src="https://wallpapercave.com/wp/wp4985118.jpg" alt="Image 5" />
          <h1><FontAwesomeIcon icon={faHeart} className="icon" /></h1> <h3>Vedhalam Songs</h3>
          <p>Actor: Ajith | Movie: Vedhalam </p>
        </div>
        <div className="card">
          <img src="https://static.toiimg.com/photo/81173124.cms" alt="Image 6" />
          <h1><FontAwesomeIcon icon={faHeart} className="icon" /></h1> <h3>Karthik Songs</h3>
          <p>Actor: Karthi | Movie: Tamil </p>
        </div>
</div></div>
  );
};

export default Favoritescontent;