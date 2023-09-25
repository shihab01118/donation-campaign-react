import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

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

  // const handleAddToDonations = () => {
  //   const donationsArray = [];
  //   const donationCategories = JSON.parse(localStorage.getItem("donations"));
  //   if (!donationCategories) {
  //     donationsArray.push(category);
  //     localStorage.setItem("donations", JSON.stringify(donationsArray));
  //   } else {
  //     const isExist = donationCategories.find((category) => category.id === id);

  //     if (!isExist) {
  //       donationsArray.push(...donationCategories, category);
  //       localStorage.setItem("donations", JSON.stringify(donationsArray));
  //     }
  //     else {
  //       Swal.fire({
  //           icon: 'error',
  //           title: 'Already Exist!',
  //       })
  //     }
  //   }
  // };

  return (
    <Link to={`/donation/${id}`}>
      <div className="shadow-xl rounded-xl" style={{backgroundColor: card_bg}}>
        <figure>
          <img src={image} alt="img" style={{borderRadius: `12px 12px 0 0`}} />
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
