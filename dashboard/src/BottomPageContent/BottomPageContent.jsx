import Upcoming from "./Upcoming";
import Calendar from "./Calendar";
import Progress from "./Progress";
import './BottomPageContent.css'

export default function BottomPageContent(){
    return <div className="bottom-grid">
            <Upcoming />
            <Calendar />
            <Progress />
        </div>
}