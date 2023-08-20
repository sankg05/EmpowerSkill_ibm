import React from 'react';
import '../Landingcss/courses.css'
import course1 from '../images/course1.jpg';
import course2 from '../images/course2.jpg';
import course3 from '../images/course3.jpg';
const Courses = () => {
  const courseData = [
    // here api end point will be called to display top courses 
    {
      // course image
      image: course1,
      // course name
      title: "Name",
      // a little desc about the course
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit aut et officiis voluptatem aperiam delectus totam doloribus! Eius, suscipit.'
    },
    {
      image: course2,
      title: "Name2",
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit aut et officiis voluptatem aperiam delectus totam doloribus! Eius, suscipit.'
    },
    {
      image: course3,
      title: "Name3",
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit aut et officiis voluptatem aperiam delectus totam doloribus! Eius, suscipit.'
    },
  ]; 
  return (
    <div id="courses" className="course-wrap">
      <div className="course-top">
        <h1 className="primary-heading">Popular courses</h1>
        <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis voluptate dignissimos. Ex, odit corrupti?</p>
      </div>
      <div className="course-bottom">
        {/* here the courses are mapped  */}
        {courseData.map((data) =>(
          <div className="course-sec-info" key={data.title}>
            
            <h2>{data.title}</h2>
            <div className="info-box-img-con">
              <img src={data.image} alt="img" />
            </div>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses;
