import React from 'react';
import Librarycontent from './librarycontent';
import Playlistcontent from './playlistcontent';
import Favoritescontent from './favoritescontent';
import Feedcontent from './feedcomponent';
import TrendingContent from './trendingcontent';
import "../styles/main.css";


interface MainProps {
  selectedSection: string;
}

const Main: React.FC<MainProps> = ({ selectedSection }) => {
  const renderContent = () => {
    switch (selectedSection) {
      case 'Trending':
        return <TrendingContent />;
      case 'Library':
        return <Librarycontent />;
      case 'Playlist':
        return <Playlistcontent />;
      case 'Favorites':
        return <Favoritescontent />;
      case 'Feed':
        return <Feedcontent />;
      default:
        return <TrendingContent />;
    }
  };

  return (
    <div className="main-content">
      {renderContent()}
    </div>
  );
};

export default Main;
