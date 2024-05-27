import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRss, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Librarycontent: React.FC = () => {
  return (
    <div className="library-content">
    <h1> My Library</h1>
    <div className="cards">
      <div className="card">
        <img src="https://static.toiimg.com/thumb/msid-97076834,width-400,resizemode-4/97076834.jpg" 
        alt="Image 4" />
      <h1><FontAwesomeIcon icon={faHeart} className="icon" /></h1><h3>Jeo Movie</h3>
        <p>Jeo Movie collections</p>
      </div>
      <div className="card">
        <img src="https://i.pinimg.com/736x/d6/46/f1/d646f139d9ecc7a21930ca7ed96d13e9.jpg" alt="Image 4" />
      <h1><FontAwesomeIcon icon={faHeart} className="icon" /></h1><h3>U1 Collections</h3>
        <p>U1 songs collections</p>
      </div>
      <div className="card">
        <img src="https://c4.wallpaperflare.com/wallpaper/551/841/232/ar-rahman-4k-cool-pc-wallpaper-preview.jpg" 
        alt="Image 4" />
      <h1><FontAwesomeIcon icon={faHeart} className="icon" /></h1><h3>A.R Songs</h3>
        <p>A.R. Rahuman collections</p>
      </div>
    </div>
</div>
  );
};

export default Librarycontent;