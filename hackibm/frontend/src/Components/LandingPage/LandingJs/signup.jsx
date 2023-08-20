import React, { useState } from 'react';
import "../Landingcss/signup.css"

const SignUp = () => {
  // State to manage login/signup toggle and user data
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Function to toggle between login and signup
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., send data to the server
    console.log('Form submitted:', userData);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png"
          alt="logo"
          className="login-logo"
        />
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={userData.username}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span className="toggle-link" onClick={toggleLogin}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
