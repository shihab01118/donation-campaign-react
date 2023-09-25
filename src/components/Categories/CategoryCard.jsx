import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const {
    text_or_button_color,
    card_bg,
    category_bg,
    category_name,
    title,
    image,
    id,
  } = category || {};

  return (
    <Link to={`/donation/${id}`}>
      <div className="shadow-xl rounded-xl" style={{backgroundColor: card_bg}}>
        <figure>
          <img src={image} alt="img" className="h-[240px]" style={{borderRadius: `12px 12px 0 0`}} />
        </figure>
        <div className="mt-5 p-4 h-[120px]">
          <p
            className="w-fit px-2 py-1 rounded font-medium text-sm mb-2"
            style={{backgroundColor: category_bg, color: text_or_button_color}}
          >
            {category_name}
          </p>
          <h2 className="text-xl font-semibold" style={{color: text_or_button_color}}>
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
