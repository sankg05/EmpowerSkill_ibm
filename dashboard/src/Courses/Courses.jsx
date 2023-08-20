import Navbar from "../Navbar";
import MenuTab from "./MenuTab";
import './Courses.css';

export default function Courses(){
    return <div>
        <Navbar />
        <div className="courses-grid">
            <div className="row">
                <img src="/courses.jpg" />
            </div>
            <div className="row content">
                <MenuTab />
            </div>
        </div>
    </div>
}