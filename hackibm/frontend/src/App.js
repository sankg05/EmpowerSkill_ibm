import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/LandingPage/LandingJs/home'
import Testimonial from './Components/LandingPage/LandingJs/testimonials';
import Navbar from './Components/LandingPage/LandingJs/navbar';
import Contact from './Components/LandingPage/LandingJs/contact';
import Footer from './Components/LandingPage/LandingJs/footer';
import Courses from './Components/LandingPage/LandingJs/courses';
import BlogHome from './Components/Blog/BlogJs/blogHome';
import Layout from './Components/Layout';
import BlogPage from './Components/Blog/BlogJs/blogPage';
import Events from './Components/UpcomingEvents/EventsJs/event';
import SignUp from './Components/LandingPage/LandingJs/signup';
const App = () => {
  return (
    // <Router>
    //   {/* <Navbar/> */}
    //   <Routes>

    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="courses" element={<Courses />} />
    //       <Route path="testimonials" element={<Testimonial />} />
    //       {/* <Route path="courses" element={<Courses />} /> */}
    //       <Route path="contact" element={<Contact />} />
    //     </Route>



    //   </Routes >

    // </Router>
    <>
       <Home />
      <Courses />
      <Testimonial />
      <Contact />
      <Footer /> 
      {/* <Navbar/> */}
      {/* <BlogHome/> */}
      {/* <BlogPage/> */}
      {/* <Events/> */}
      {/* <SignUp/> */}
    </>

  );
};

export default App;
