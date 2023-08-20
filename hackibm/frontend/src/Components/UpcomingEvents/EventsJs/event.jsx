import React, { useState } from 'react';
import "../Eventscss/event.css";
import Navbar from '../../LandingPage/LandingJs/navbar';
import img from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import { AiOutlinePlus } from 'react-icons/ai'
import { LuCalendarDays } from 'react-icons/lu'
import { IoTimeOutline } from 'react-icons/io5'

const Events = () => {
  const [events] = useState([
    {
      image: img,
      name: "Event 1",
      date: "January 16, 2023",
      time: "8:00 am - 10:00 am",
      cost: "Free",
      category: "Science",
      tags: ['Physics', 'Chemistry'],
    },
    {
      image: img2,
      name: "Event 2",
      date: "December 18, 2023",
      time: "8:00 am - 10:00 am",
      cost: "Free",
      category: "Math",
      tags: ['Algebra', 'Math', 'Geometry'],

    },
    {
      image: img3,
      name: "Event 3",
      date: "May 19, 2023",
      time: "8:00 am - 10:00 am",
      cost: "Free",
      category: "English",
      tags: ['Vocabulary'],

    },
    {
      image: img2,
      name: "Event 4",
      date: "December 17, 2023",
      time: "8:00 am - 10:00 am",
      cost: "Free",
      category: "Math",
      tags: ['Algebra', 'Math', 'Geometry'],

    },
    {
      image: img3,
      name: "A",
      date: "December 17, 2023",
      time: "8:00 am - 10:00 am",
      cost: "Free",
      category: "Math",
      tags: ['Algebra', 'Math', 'Geometry'],

    },
  ]);

  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterBy, setFilterBy] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]); 
  const today = new Date();

  const isEventUpcoming = (event) => {
    const eventDate = new Date(event.date);
    return eventDate > today;
  };

  const upcomingEvents = events.filter((event) => isEventUpcoming(event));
  const pastEvents = events.filter((event) => !isEventUpcoming(event));

  const handleSort = (criteria) => {
    if (criteria === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Sort by the new criteria in ascending order
      setSortBy(criteria);
      setSortOrder('asc');
    }
  };

  const filterEvents = () => {
    let filtered = events;
    if (filterBy === 'upcoming') {
      filtered = upcomingEvents;
    } else if (filterBy === 'past') {
      filtered = pastEvents;
    }
    if (selectedCategory) {
      filtered = filtered.filter((event) => event.category === selectedCategory);
    }
    if (selectedTags.length > 0) {
      
      filtered = filtered.filter((event) =>
        selectedTags.every((selectedTag) => event.tags.includes(selectedTag))
      );
    }
    return filtered;
  };

  const combineSortingAndFiltering = () => {
    const filtered = filterEvents();
    const sorted = filtered.slice().sort((a, b) => {
      if (sortBy === 'date') {
        return sortOrder === 'asc'
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'name') {
        return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      return 0;
    });
    return sorted;
  };

  const getUniqueCategories = () => {
    const categoriesSet = new Set();
    events.forEach((event) => {
      categoriesSet.add(event.category);
    });
    return Array.from(categoriesSet);
  };

  const getUniqueTags = () => {
    const tagsSet = new Set();
    events.forEach((event) => {
      event.tags.forEach((tag) => {
        tagsSet.add(tag);
      });
    });
    return Array.from(tagsSet);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleTagClick = (tag) => {

    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const uniqueCategories = getUniqueCategories();
  const uniqueTags = getUniqueTags();

  const combinedEvents = combineSortingAndFiltering();

  return (
    <div className="events-page">
      <Navbar className="sticky" />
      <div className="events-con">
        <div className="left">
          <div className="categories title">
            <h2>Categories</h2>
            <ul>
              <li
                onClick={() => handleCategoryClick('')}
                className={!selectedCategory ? 'selected-category' : ''}
              >
                All
              </li>
              {uniqueCategories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className={selectedCategory === category ? 'selected-category' : ''}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="tags title">
            <h2>Tags</h2>
            <ul>
              <li
                onClick={() => handleTagClick('')}
                className={!selectedTags.length ? 'selected-tag' : 'unselected-tag'}
              >
                All
              </li>
              {uniqueTags.map((tag, index) => (
                <li
                  key={index}
                  onClick={() => handleTagClick(tag)}
                  className={selectedTags.includes(tag) ? 'selected-tag' : 'unselected-tag'}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="first-row">
            <div className="title">
              <h2>Events</h2>
            </div>
            <div className="add-event">
              <button><AiOutlinePlus /> Add Events </button>
            </div>
          </div>
          <div className="second-row">
            <div className="sec-left">
              <ul>
                <li onClick={() => setFilterBy('all')} className={filterBy === 'all' ? 'selected-filter' : 'unselected-filter'}>All</li>
                <li onClick={() => setFilterBy('upcoming')} className={filterBy === 'upcoming' ? 'selected-filter' : 'unselected-filter'}>Upcoming</li>
                <li onClick={() => setFilterBy('past')} className={filterBy === 'past' ? 'selected-filter' : 'unselected-filter'}>Past</li>
              </ul>
            </div>
            <div className="sec-right">
              <label htmlFor="sortSelect">Sort by: </label>
              <select
                id="sortSelect"
                onChange={(e) => handleSort(e.target.value)}
                value={sortBy}
              >
                <option value="date">Date</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
          <div className="main-row">
            {combinedEvents.map((event, index) => (
              <div key={index} className="event-item">
                <img src={event.image} alt={event.name} />
                <h3>{event.name}</h3>
                <p><LuCalendarDays /> {event.date}</p>
                <p><IoTimeOutline /> {event.time}</p>
                <p>Cost: {event.cost}</p>
                <button>Register</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
