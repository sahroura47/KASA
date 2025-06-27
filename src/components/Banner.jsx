import bannerImg from "../assets/banner-img.svg";
const image = bannerImg;
const caption = "Chez vous, partout et ailleurs";
const Banner = ({ image, caption }) => {
  return (
    <figure className="banner">
      <img src={image} alt="image bannière" className="bannerImg" />
      <figcaption className="imgText">{caption}</figcaption>
    </figure>
  );
};
export default Banner;
