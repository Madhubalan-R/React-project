import React from 'react';
import '../styles/overallstyle.css';

const TrendingContent: React.FC = () => {
  return (
    <div className="library-content">
      <h1> Trending </h1>
      <div className="cards">
        <div className="card">
          <img src="https://live.staticflickr.com/65535/52667109963_4f76301b9a_b.jpg" 
          alt="Image 4" />
          <h3>Leo Songs</h3>
          <p>Actor: Vijay | Movie: Leo </p>
        </div>
        <div className="card">
          <img src="https://wallpapercave.com/wp/wp4985118.jpg" alt="Image 5" />
          <h3>Vedhalam Songs</h3>
          <p>Actor: Ajith | Movie: Vedhalam </p>
        </div>
        <div className="card">
          <img src="https://static.toiimg.com/photo/81173124.cms" alt="Image 6" />
          <h3>Karthik Songs</h3>
          <p>Actor: Karthi | Movie: Tamil </p>
        </div>
      </div><div className='cards'>  
        <div className="card">
          <img src="https://images.indianexpress.com/2024/01/Vijay-Sethupathi-in-Vikram-Vedha.jpg" 
          alt="Image 4" />
          <h3>VJS Songs</h3>
          <p>Actor: VijaySethupathi | Movie: Tamil </p>
        </div>
        <div className="card">
          <img src="https://wallpapercave.com/wp/wp13056635.jpg" alt="Image 5" />
          <h3>Vijay Songs</h3>
          <p>Actor: Vijay | Movie: Tamil </p>
        </div>
        <div className="card">
          <img src="https://1480864561.rsc.cdn77.org/assets/wallpaper/profile/dhanush-5713/medium/Dhanush-02.jpg" 
          alt="Image 6" />
          <h3>Thanush Songs</h3>
          <p>Actor: Thanush | Movie: Tamil </p>
        </div>
    </div>
    </div>
  );
};

export default TrendingContent;
