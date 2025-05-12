import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import Tags from "../components/Tags";
import Ratings from "../components/Ratings";
import DropinContainer from "../components/DropinContainer";
function CardDetailPage() {
  const { id } = useParams();
  const [card, setCards] = useState(null);
  useEffect(() => {
    const fetchCardDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/properties/${id}`
        );
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error(
          "erreur lors de la récupération des détails de la carte",
          error
        );
      }
    };
    fetchCardDetail();
  }, [id]);
  if (!card) {
    return <div>chargement...</div>;
  }
  return (
    <div className="cardDetailPageContainer">
      <ImageCarousel pictures={card.pictures} />
      <div className="cardsCaption">
        <h2 className="cardDetailTitle">
          {card.title} <br></br>
          <span className="location">{card.location}</span>{" "}
        </h2>
        <div className="hostRatings">
          <div className="hostInfo">
            <p className="hostName">
              {card.host.name.split(" ")[0]} <br></br>{" "}
              {card.host.name.split(" ")[1]}
            </p>
            <div className="hostLogo">
              <img
                src={card.host.picture}
                className="hostPic"
                alt="image du propriétaire"
              />
            </div>
          </div>
          <div className="ratings">
              <Ratings rating={card.rating} />
            </div>
        </div>
      </div>
      <div className="reviewPanel">
        <Tags tags={card.tags} />
      </div>
      <div className="descEquip">
        <DropinContainer className="dropinCards" data={[
          {title:"Description", content:  <p className="description">{card.description}</p>},
          {title:"Equipements", content:<lu className="equipment-list">
            {card.equipments.map((item, index) => (
              <li key={index} className="equipment-item">
                {item}
              </li>
            ))}
          </lu> }
        ]} />
      </div>
    </div>
  );
}
export default CardDetailPage;
