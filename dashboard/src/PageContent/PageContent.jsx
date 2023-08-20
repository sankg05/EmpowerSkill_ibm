import BadgeCard from "./BadgeCard";
import { DoughnutChart } from "./DoughnutChart";
import RatingChart from "./RatingChart";
import './PageContent.css';

export default function PageContent(){
    return <div className="page-grid">
            <BadgeCard />
            <DoughnutChart />
            <RatingChart />
    </div>
}