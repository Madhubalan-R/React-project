import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Main from './components/main';
import MusicPlayer from './components/musicplayer';
import './styles/App.css';


const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('Trending');

  return (
  <div className='Main-Page'>
    <div className="sidebar-Main">
      <Sidebar onSelectSection={setSelectedSection} />
      </div>
      <div className="Access-page">
      <Main selectedSection={selectedSection} />
      <MusicPlayer />
  </div>
</div>

  );
};

export default App;
