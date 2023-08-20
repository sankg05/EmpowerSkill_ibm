import { Component } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
    state = {clicked : false};

    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }

render(){
    return ( 
<nav className="nav container">

    <div className="logo">EmpowerSkill</div>
    <div id="nav__menu" className={this.state.clicked ? "#nav__menu active" : "#nav__menu"}>
        
        <ul className="nav__list">
            <li className="nav__item">
                <a href="/" className="nav__link active-link">Home</a>
            </li>
            <li className="nav__item">
                <Link to="/courses" className="nav__link">Courses</Link>
            </li>
            <li className="nav__item">
                <a href="/blog" className="nav__link">Blog</a>
            </li>
            <li className="nav__item">
                <a href="/accounts" className="nav__link">Upcoming Events</a>
            </li>
            <li className="nav__item">
                <a href="/contact" className="nav__link">My Account</a>
            </li>
        </ul>
    </div>

    <div id="mobile" onClick={this.handleClick}> 
        <i id="bar" className={this.state.clicked ? "bx bx-exit icon" : "bx bx-list-ul icon"}></i>
    </div>
</nav>
    )
}
}
export default Navbar;