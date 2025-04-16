import Banner from "../components/Banner"
import CardsContainer from "../components/Cards-container";
import bannerImg from "../assets/banner-img.svg"
const caption="Chez vous, partout et ailleurs"
const HomePage= () => {
    return (

    <div className="homeContainer">
        <Banner image={bannerImg} caption={caption} />
        <CardsContainer />
    </div>)
}
export default HomePage;