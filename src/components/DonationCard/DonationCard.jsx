import { Link } from "react-router-dom";

const DonationCard = ({ category }) => {
  const {
    image,
    title,
    category_name,
    category_bg,
    card_bg,
    amount,
    text_or_button_color,
    id,
  } = category;

  const cardStyle = {
    backgroundColor: card_bg,
  };
  const categoryStyle = {
    backgroundColor: category_bg,
    color: text_or_button_color,
  };

  return (
    <div
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100"
      style={cardStyle}
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-[200px] md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      ></img>
      <div className="flex flex-col justify-between p-5 leading-normal">
        <p
          className="w-fit px-2 py-1 rounded font-medium text-sm mb-2"
          style={categoryStyle}
        >
          {category_name}
        </p>
        <h2 className="text-2xl font-semibold text-[#0B0B0B]">{title}</h2>
        <p
          className="font-semibold mb-4 mt-3"
          style={{ color: text_or_button_color }}
        >
          ${amount}
        </p>
        <div>
          {/* <Link to={`/donation/${id}`}> */}
            <button
              className="btn text-white capitalize"
              style={{ backgroundColor: text_or_button_color }}
            >
              View Details
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
