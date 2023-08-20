import './Sidebar.css'

function Sidebar() {

    const handleSidebarToggle = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('close');
    };

    const handleSearchClick = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('close');
    };


    return (
        <div>
            <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />

            <nav className="sidebar close">
                <header>
                    <div className="image-text">
                        <div className="text logo-text">
                            <span className="name">Alice Doe</span>
                            <span className="username">alicedoe@gmail.com</span>
                        </div>
                    </div>
                    <i className='bx bx-chevron-right toggle' onClick={handleSidebarToggle}></i>
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        <li className="search-box">
                            <i className='bx bx-search icon'></i>
                            <input type="text" placeholder="Search..." />
                        </li>
                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-home-alt icon' ></i>
                                    <span className="text nav-text">Profile</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-bar-chart-alt-2 icon' ></i>
                                    <span className="text nav-text">Leaderboard</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-book icon'></i>
                                    <span className="text nav-text">Resources</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-pie-chart-alt icon' ></i>
                                    <span className="text nav-text">To-Do list</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-calendar icon' ></i>
                                    <span className="text nav-text">Calendar</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-content">
                        <li className="">
                            <a href="#">
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>
                        <li className="mode">
                            <div className="sun-moon">
                                <i className='bx bx-moon icon moon'></i>
                                <i className='bx bx-sun icon sun'></i>
                            </div>
                            <span className="mode-text text">Dark mode</span>
                            <div className="toggle-switch">
                                <span className="switch"></span>
                            </div>
                        </li>
                        
                    </div>
                </div>
            </nav>

        </div>
        
    )
}

export default Sidebar;