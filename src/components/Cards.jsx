const Cards = ({ imageUrl, caption }) => {
  return (
    <figure className="card">
      <img src={imageUrl} alt={caption} className="cardImg" />
      <figcaption className="cardText"> {caption}</figcaption>
    </figure>
  );
};
export default Cards;
