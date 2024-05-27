import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faBackwardFast, faForwardFast, faHeart } from '@fortawesome/free-solid-svg-icons';

const Playlistcontent: React.FC = () => {
  return (
    <div>
        <h1>My Playlist</h1>
        <div className='Top-Bar'>
     <h2><FontAwesomeIcon icon={faHeart} className="icon" /> My Collections</h2>
     <hr />
</div>
<div className="cards">
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQ66-dvFwjjUT1H_YcndAO8R4zA3SK1QbewAHNAFV_Q&s" 
        alt="Image 4" />
      <h1><FontAwesomeIcon icon={faHeart} className="icon" /></h1><h3>Travel time Songs</h3>
        <p>Travelling collections</p>
      </div>
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBFCxjiEnuDTEIluY9mfEFpU_y_eukqD4s5luU0worg&s" alt="Image 4" />
      <h1><FontAwesomeIcon icon={faHeart} className="icon" /></h1><h3>Sleep time Memories</h3>
        <p>Sleeping collections</p>
      </div>
      <div className="card">
        <img src="https://png.pngtree.com/background/20230526/original/pngtree-pair-of-headphones-sitting-in-a-dark-room-picture-image_2743224.jpg" 
        alt="Image 4" />
      <h1><FontAwesomeIcon icon={faHeart} className="icon" /></h1><h3>Alone Vibe</h3>
        <p>Alone songs collections</p>
      </div>
    </div>
    </div>
  );
};

export default Playlistcontent;