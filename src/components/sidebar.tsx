import React from 'react';
import '../styles/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faMusic,faAddressBook, faHeart, faRss, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


interface SidebarProps {
  onSelectSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectSection }) => {
  return (
    <div className="sidebar">
          <div className="logo-container">
        <img src="https://play-lh.googleusercontent.com/fTj7Wddl59mIcAglFGsHF7R4KmFoRh689Trm3RIIzLaB3HrvxipNTnowxoOByrRa7d7P" 
        alt="Logo" className="logo" />
      </div>
      <ul>
      <li onClick={() => onSelectSection('Trending')}>
          <FontAwesomeIcon icon={faFire} className="icon" /> Trending
        </li>
        <li onClick={() => onSelectSection('Library')}>
          <FontAwesomeIcon icon={faAddressBook} className="icon" /> Library
        </li>
        <li onClick={() => onSelectSection('Playlist')}>
          <FontAwesomeIcon icon={faMusic} className="icon" /> Playlist
        </li>
        <li onClick={() => onSelectSection('Favorites')}>
          <FontAwesomeIcon icon={faHeart} className="icon" /> Favorites
        </li>
        <li onClick={() => onSelectSection('Feed')}>
          <FontAwesomeIcon icon={faRss} className="icon" /> Feed
        </li> </ul>

        <li onClick={() => onSelectSection('SignOut')}>
          <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Sign Out
        </li>  </div>
  );
};

export default Sidebar;
