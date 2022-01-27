import "./Mission.css";
import { FormText, Card } from "react-bootstrap";

export default function Mission() {
  return (
    <div>
      <div>
        <Card className="aboutData">
          <h1 className="missionTitle"> Our Goal </h1>
          <FormText className="missionText">
            Our goal with The IIC is create an ongoing community driven story
            arch that will span from collection to collection! With a rich lore
            and storyline we can take our infants ANYWHERE! We are committed to
            our community and doing things naturally! We want our growth to be
            real and genuine! The main purpose of The IIC is not only to foster
            an AMAZING community but to also give back to those in need! 10% of
            each phase sales will go to The Children's Miracle Network, that
            works directly with Children's Hospitals!
          </FormText>

          <br></br>

          <h1 className="missionTitle">📓 COLORING BOOKS 📓</h1>
          <p className="missionText">
            With such a rich backstory and almost unlimited amount of characters
            to choose from we will be creating our very own IMMATURE INFANT
            COLORING BOOKS! - They will be made from YOUR infants and aside from
            each token holder receiving a book we will be donating 1 book for
            each holder to the Children's Hospital where we will personally hand
            them out to kids! - We will release a book for each of our future
            collections!
          </p>
        </Card>
      </div>
    </div>
  );
}
