import React from 'react'
import '../styles/Home.css'
import BannerImage from "../assets/smokies.jpg"
function Home() {
  return (
    <div className="home">
        <div className="headerContainer" style={{backgroundImage: `url(${BannerImage})`}}>
            <h1> Hello, I am Matthew Ross! </h1>
            <p> Civil Engineering Student with Computer Science Tendencies </p>
        </div>

    </div>
  );
}

export default Home