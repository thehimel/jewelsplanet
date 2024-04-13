import {FC} from "react";
import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";

interface RatingProps {
  value: number;
  count: number;
  color?: string;
}

const Rating: FC<RatingProps> = ({value, color, count}) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(value >= i ? <FaStar key={i} /> : value >= i - 0.5 ? <FaStarHalfAlt key={i} /> : <FaRegStar key={i} />);
  }

  return (
    <div className="flex gap-2">
      <div className={`flex ${color}`}>
        {stars}
      </div>
      <small className="mb-0 pb-0 uppercase font-bold">{count > 0 ? count : 'No'} Reviews</small>
    </div>
  );
};

Rating.defaultProps = {
  color: 'text-foreground',
};

export default Rating;
