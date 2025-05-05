import greyStar from "../assets/greyStar.svg";
import redStar from "../assets/redStar.svg"

function StarR({rating}){
    const totalRatings=5
    return (
        <span className="ratingsPanel">
     {[...Array(totalRatings)].map((_,index)=>(
     <img key={index} src={index<rating? redStar : greyStar} alt="star" />
     ))}

        </span>
    );
}
export default StarR;