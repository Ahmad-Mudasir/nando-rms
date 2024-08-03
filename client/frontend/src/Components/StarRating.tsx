import { LiaStarSolid } from "react-icons/lia";

const StarRating = () => {
    const stars = Array(5).fill(null);
  
    return (
      <div className="flex">
        {stars.map((_, index) => (
          <LiaStarSolid key={index} size={24} color="gold" />
        ))}
      </div>
    );
  };
  
  export default StarRating;