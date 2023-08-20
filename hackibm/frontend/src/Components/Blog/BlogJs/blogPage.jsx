import React from 'react'
// import ReactMarkdown from 'react-markdown'
import { useState } from 'react';
import Navbar from '../../LandingPage/LandingJs/navbar';
import '../Blogcss/blogPage.css';
import img from '..//images/man1.jpg';
import Blogimg from '..//images/course1.jpg';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';

const BlogPage = () => {
  const blogPost =
  {
    title: 'Blog 1',
    desc: "This is my first blog",
    author: "John",
    profile: img,
    likes: 3,
    date: 'Aug 14',
    comments: [
      {
        text: "Great post!",
        author: "Alice"
      },
      {
        text: "I enjoyed reading this.",
        author: "Bob"
      }

    ],
    image: Blogimg,
    content: `
    A few years ago — aided by selling a rental property we’d owned for decades — my husband and I bought a beach house that we could almost afford. We texted our three children from the real estate office, telling them we had both good news and bad news. The good news was, of course, that we had bought a beach house. The bad news was that we could now only afford to send two of them to college (a comment meant in jest, although our middle child eagerly volunteered to skip college.

    Reduces physiological arousal
    In one of the earliest studies to examine the beneficial effects of looking at water, a researcher at the University of Delaware measured people’s brain waves while they looked at pictures of nature that included either green space(natural vegetation) or blue spaces(water).People who were looking at blue- space pictures showed lower levels of brain activation, indicating simply looking at pictures of water is relaxing for the brain.
    
    But looking at water doesn’t just help us relax.More recent research suggests images of water can lessen help people manage routine dental procedures, such as having a cavity filled or a tooth pulled.Researchers in this study randomly assigned patients to one of three conditions: Some took a virtual walk — using a virtual reality headset — around a local beach; others took a virtual walk around a local city; and still others received standard care.
    
    Patients who took a virtual walk around a local beach reported less anxiety and pain than those who received standard care or took a virtual walk around a city.They also remembered the dental procedure more positively a week later, indicating that even virtual exposure to water leads to lasting beneficial effects.
    
    Increases happiness
    One of the largest studies to examine the impact of so - called “blue spaces” — oceans, rivers, lakes — collected data from more than 20,000 people in the United Kingdom.Using a smartphone app that tracked people’s specific location, researchers asked the participants to report their overall sense of well - being at random points throughout the day.They then calculated how close people were to different types of natural environments, including marine and coastal locations as well as different types of green spaces.
    
    No surprise: People were generally much happier when in any type of natural environment than in urban locations.But all nature was not equally beneficial.People were happiest in marine and coastal locations.
    
    Why does spending time in marine and coastal locations make us feel better ? One explanation is that looking at a vast body of water puts our own stressors in proper perspective.`,

  }
  const commentCount = blogPost.comments.length;
  const [likeCount, setLikeCount] = useState(blogPost.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(blogPost.comments);

  

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObj = {
        text: newComment,
        author: 'User', 
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };
  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };
  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="blog-page-con">
      <Navbar />
      <div className="blog-page-body">
        <div className="con">
          <div className="blog-title">
            <h1>{blogPost.title}</h1>
          </div>
          <div className="blog-desc">
            {blogPost.desc}
          </div>
          <div className="blog-author">
            <div className="profile-img">
              <img src={blogPost.profile}></img>
            </div>
            <div className="author-name">
              <div className="name">
                {blogPost.author}
              </div>
              <div className="date">
                {blogPost.date}
              </div>
            </div>
            <div className="blog-likes-comments">
              <div className="likes" onClick={handleLikeClick}>
                {isLiked ? <AiFillLike /> : <AiOutlineLike />} {likeCount}
              </div>
              <div className="comments" onClick={handleCommentClick}>
                <GoComment /> {commentCount}
              </div>
              {showComments && (
                <div className="comments-sidebar active">
                  <div className="close-sidebar" onClick={handleCommentClick}>
                    &times;
                  </div>
                  {comments.map((comment, index) => (
                    <div key={index} className="comment">
                      <div className="comment-author">{comment.author}</div>
                      <div className="comment-text">{comment.text}</div>
                    </div>
                  ))}
                  <div className="post-comment">
                    <textarea
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={handleCommentChange}
                    />
                    <button onClick={handlePostComment}>Post</button>
                  </div>








                </div>
                 )}
            </div>
          </div>

            <div className="main-content" >
              <div className="blog-image">
                <img src={blogPost.image} alt="" />
              </div>
              <div className="blog-content">
                {blogPost.content}
              </div>
            </div>
          </div>

        </div>
      </div>
      )
}

      export default BlogPage;
