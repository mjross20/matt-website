import React from 'react'
import '../styles/Home.css'
import BannerImage from "../assets/smokies.jpg"
function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer" >
            <h1> Hello, I am Matthew Ross! </h1>
            <p> Civil Engineering Student with Computer Science Tendencies </p>
        </div>

    </div>
  );
}

export default Home