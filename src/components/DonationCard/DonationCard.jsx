import { Link } from "react-router-dom";
import PropTyeps from 'prop-types'

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

  return (
    <div
      className="flex flex-col rounded-lg shadow md:flex-row"
      style={{backgroundColor: card_bg}}
    >
      <div className="md:w-[250px] h-auto">
      <img
        className="w-full h-full rounded-[8px_8px_0px_0px] md:rounded-[8px_0px_0px_8px]"
        src={image}
        alt=""
      ></img>
      </div>
      <div className="flex flex-col justify-between p-5 leading-normal">
        <p
          className="w-fit px-2 py-1 rounded font-medium text-sm mb-2"
          style={{backgroundColor: category_bg, color: text_or_button_color}}
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
          <Link to={`/donation/${id}`}>
            <button
              className="btn text-white capitalize"
              style={{ backgroundColor: text_or_button_color }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  category: PropTyeps.object,
}

export default DonationCard;
