import React from 'react'
import Navbar from './navbar';
import '../Landingcss/home.css';
import img from '../images/pic3.png';
import { FiArrowRight } from "react-icons/fi";
const Home = () => {
  return (
    <div id='home' className="home-con">
      <Navbar/>
      <div className="home-banner-con">
        <div className="home-text-sec">
          <h1 className="primary-heading">
            Community Upskilling Platform
          </h1>
          <p className="primary-text">
          EmpowerSkill is a Cloud platform that facilitates the exchange of skills and knowledge among individuals within a community.
          </p>
          <button className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-img-sec">
          <img src={img} alt="img here" />
        </div>
      </div>
    </div>
  )
}

export default Home;
