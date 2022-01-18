import Carousel from "../Carousel/Carousel";
import { Card, ProgressBar, ProgressBarProps } from "react-bootstrap";
import "./oneofones.css";
import RoadMap from "../roadMap/RoadMap";

export default function Oneofones() {
  return (
    <div className="roadMapContainer">
      <Card className="roadMapBG2">
        <div className="Carousel">
          <Carousel />
        </div>
      </Card>
      <Card className="roadMapBG">
        <div className="progress">
          <h1 className="heading">ROAD MAP!</h1>
          <br></br>
          <h2 className="roadMapText"> STAGE 1: LEGACY COLLECTION</h2>
          <br></br>
          <p className="roadMapText">
            300 Pre Minted Infants that will act as EXCLUSIVE all access passes
            for future drops!
          </p>
          <RoadMap bgcolor="orange" color="white" progress="100" height={30} />
          <p className="roadMapText">Social Media and Marketing Campaign</p>
          <RoadMap bgcolor="red" progress="100" height={30} />
          <p className="roadMapText">Website Launch and Minting Begin!</p>
          <RoadMap bgcolor="yellow" progress="100" height={30} />
          <p className="roadMapText">
            Donation Event With Children's Miracle network
          </p>
          <RoadMap bgcolor="#99ff66" progress="0" height={30} />
          <p className="roadMapText">Release Of The Immature Pets Club!</p>
          <RoadMap bgcolor="#ff00ff" progress="0" height={30} />
          <p className="roadMapText">
            The Rest Of The Infants Will Be Released!
          </p>
          <RoadMap bgcolor="#99ccff" progress="0" height={30} />
          <p className="roadMapText"> BABY BOTTLE SERUM </p>
          <RoadMap bgcolor="blue" progress="0" height={30} />
        </div>
      </Card>
    </div>
  );
}
