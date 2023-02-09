import { Link } from "react-router-dom";

const CardItem = ({ card, selectedCategoryId, isFirstCard }) => {
  const { img, title, desc } = card;

  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={`relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat transform transition duration-1000 hover:scale-110 ${
        isFirstCard ? "first-card" : ""
      }`}
    >
      <Link to={`/survey-Audience/${title}/${selectedCategoryId}`}>
        <div className="relative bg-black bg-opacity-40 p-8 pt-40 text-white flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold">{title}</h3>

          <p className="text-sm">{desc}</p>
        </div>
      </Link>
    </div>
  );
};
export default CardItem;
