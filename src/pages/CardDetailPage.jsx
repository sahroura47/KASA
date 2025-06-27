import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import Tags from "../components/Tags";
import Ratings from "../components/Ratings";
import DropinContainer from "../components/DropinContainer";
function CardDetailPage() {
  const { id } = useParams();
  const [card, setCards] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/properties/${id}`
        );

        if (!response.ok) {
          navigate("/not-found");

          return;
        }

        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error(
          "erreur lors de la récupération des détails de la carte",
          error
        );
        navigate("/not-found");
      } finally {
        setLoading(false);
      }
    };
    fetchCardDetail();
  }, [id, navigate]);
  if (loading) {
    return <div>chargement...</div>;
  }

  return (
    <div className="cardDetailPageContainer">
      <ImageCarousel pictures={card.pictures} />
      <div className="cardsCaption">
        <div className="appartTags">
          <h1 className="cardDetailTitle">
            {card.title} <br></br>
            <span className="location">{card.location}</span>{" "}
          </h1>
          <div className="reviewPanel">
            <Tags tags={card.tags} />
          </div>
        </div>
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
      <div className="descEquip">
        <DropinContainer
          className="dropinCards"
          data={[
            {
              title: "Description",
              content: <p className="description">{card.description}</p>,
            },
            {
              title: "Equipements",
              content: (
                <ul className="equipment-list">
                  {card.equipments.map((item, index) => (
                    <li key={index} className="equipment-item">
                      {item}
                    </li>
                  ))}
                </ul>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
export default CardDetailPage;
