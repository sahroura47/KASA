import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function CardsContainer() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/properties");
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("erreur lors de la récupération de données:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="cardsContainer">
      {cards.map((card) => (
        <Link key={card.id} to={"/card/" + card.id} className="linkToDetail">
          <Cards
            key={card.id}
            imageUrl={card.pictures[0]}
            caption={card.title}
          />
        </Link>
      ))}
    </div>
  );
}
export default CardsContainer;
