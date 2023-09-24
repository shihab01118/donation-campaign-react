const CategoryCard = ({ category }) => {
  const {
    text_or_button_color,
    card_bg,
    category_bg,
    category_name,
    title,
    image,
  } = category || {};
  const cardStyle = {
    backgroundColor: card_bg,
  };
  const categoryStyle = {
    backgroundColor: category_bg,
    color: text_or_button_color
  }
  const cardTitleStyle = {
    color: text_or_button_color
  }
  const imageStyle = {
    borderRadius: `12px 12px 0 0`
  }
  return (
    <div className="shadow-xl rounded-xl" style={cardStyle}>
      <figure>
        <img src={image} alt="img" style={imageStyle} />
      </figure>
      <div className="mt-5 p-4">
        <p className="w-fit px-2 py-1 rounded font-medium text-sm mb-2" style={categoryStyle}>{category_name}</p>
        <h2 className="text-xl font-semibold" style={cardTitleStyle}>{title}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
