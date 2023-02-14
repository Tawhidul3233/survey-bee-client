import { Link } from "react-router-dom";

const CardItem = ({ card, selectedCategoryId, isFirstCard }) => {
  const { img, title, desc } = card;

  return (
    <>
      <Link
        style={{
          backgroundImage: `url(${img})`,
        }}
        className={` w-80 h-60  block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat transform transition duration-1000 hover:scale-110 shadow-lg   ${
          isFirstCard ? "first-card  " : ""
        }`}
        to={`/survey-Audience/${title}/${selectedCategoryId}`}
      >
        <div
          className={`p-8 pt-32   ${
            isFirstCard ? "text-white bg-black bg-opacity-25  " : "text-black"
          }`}
        >
          <h3 className="text-2xl font-bold">{title}</h3>

          <p className="text-sm">{desc}</p>
        </div>
      </Link>
    </>
  );
};
export default CardItem;
