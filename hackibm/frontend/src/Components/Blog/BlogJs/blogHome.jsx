import React from 'react';
import '../Blogcss/blogHome.css';
import Navbar from '../../LandingPage/LandingJs/navbar';
import img from '../images/man1.jpg';
import Blogimg from '../images/course3.jpg';
import Blogimg2 from '../images/course2.jpg';
import Blogimg3 from '../images/course1.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import '../../LandingPage/Landingcss/navbar.css'
import { ImSearch } from 'react-icons/im'
import { useState } from 'react';
import '..//..//../App.css';
import {IoIosCreate} from 'react-icons/io';


const BlogHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const blogs = [
    {
      title: 'Blog 1',
      desc: "Hello, I am starting a new blog series.",
      date: 'Aug 12',
      tag: 'daily-life',
      author: 'John',
      profile: img,
      image: Blogimg,
    },
    {
      title: 'Blog 2',
      desc: "Hello, I am starting a new blog series.",
      date: 'Aug 12',
      tag: 'household',
      author: 'John',
      profile: img,
      image: Blogimg3,
    },
    {
      title: 'Blog 3',
      desc: "Hello, I am starting a new blog series.",
      date: 'Aug 12',
      tag: 'lifestyle',
      author: 'John',
      profile: img,
      image: Blogimg3,
    },
    {
      title: 'Blog 4',
      desc: "Hello, I am starting a new blog series.",
      date: 'Aug 12',
      tag: 'science',
      author: 'John',
      profile: img,
      image: Blogimg,
    },
    {
      title: 'Blog 5',
      desc: "Hello, I am starting a new blog series.",
      date: 'Aug 12',
      tag: 'sports',
      author: 'John',
      profile: img,
      image: Blogimg2,

    },
    {
      title: 'Blog 6',
      desc: "Hello, I am starting a new blog series.hello helllo helllo ",
      date: 'Aug 12',
      tag: 'daily-life',
      author: 'John',
      profile: img,
      image: Blogimg3,
    },
    {
      title: 'Blog 7',
      desc: "Hello, I am starting a new blog series.hello helllo helllo ",
      date: 'Aug 12',
      tag: 'daily-life',
      author: 'John',
      profile: img,
      image: Blogimg,
    },
    {
      title: 'Blog 8',
      desc: "Hello, I am starting a new blog series.hello helllo helllo ",
      date: 'Aug 13',
      tag: 'family',
      author: 'John',
      profile: img,
      image: Blogimg3,
    },
    {
      title: 'Blog 9',
      desc: "Hello, I am starting a new blog good series.hello helllo helllo ",
      date: 'Aug 12',
      tag: 'computers',
      author: 'Johny',
      profile: img,
      image: Blogimg2,
    },
    {
      title: 'Blog 10',
      desc: "Hello, I am starting a new blog series.hello helllo helllo hello ",
      date: 'Aug 12',
      tag: 'life',
      author: 'John',
      profile: img,
      image: Blogimg,
    },
  ];
  const filteredBlogs = blogs.filter((data) =>
    (data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.date.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedTags.length === 0 || selectedTags.includes(data.tag))
  );
  const uniqueTagsSet = new Set();
  blogs.forEach((data) => {
    uniqueTagsSet.add(data.tag);
  });

  // Convert Set back to an array
  const uniqueTagsArray = Array.from(uniqueTagsSet);
  return (
    <div className="blog-con">
      <Navbar className="sticky-nav" />
      <div className="blog-con-body">
        <div className="left-sec">
          <div className="search-other">
            <div className="search">

              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className='search-icon'><ImSearch/></i>
            </div>
            <div className="other">
              <IoIosCreate className='create-icon'/>
            </div>
          </div>

          <div className="blogs">
            {filteredBlogs.map((data) => (
              <div className="blogs-mapped" key={data.title}>
                <div className="blogs-mapped-body">
                  <div className="title">
                    <h2>{data.title}</h2>
                  </div>
                  <div className="author">
                    <div className="profile-img">
                      <img src={data.profile} alt="" />
                    </div>
                    <div className="author-name">
                      {data.author}
                    </div>
                  </div>
                  <div className="desc">
                    {data.desc}
                  </div>
                  <div className="date-tag">
                    <div className="date">
                      {data.date}
                    </div>
                    <div className="tag">
                      {data.tag}
                    </div>
                  </div>
                </div>
                <div className="blogs-mapped-image">
                  <img src={data.image} alt="" />
                </div>

              </div>
            ))}

          </div>
        </div>
        <div className="right-sec">
          <div className="discover-more">
            <h2>Discover more of what matters to you</h2>
            <div className="tag-con">
              {uniqueTagsArray.map((tag) => (
                <div
                  className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
                  key={tag}
                  onClick={() => {
                    if (selectedTags.includes(tag)) {
                      setSelectedTags(selectedTags.filter((t) => t !== tag));
                    } else {
                      setSelectedTags([...selectedTags, tag]);
                    }
                  }}
                >
                  {tag}
                </div>
              ))}
              <div className={`tag ${selectedTags.length === 0 ? 'selected' : ''}`}
                onClick={() => setSelectedTags([])}
              >
                All
              </div>
            </div>
            <div className="trending-section">
              <h2>Trending</h2>
              <div className="trend-con">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHome
