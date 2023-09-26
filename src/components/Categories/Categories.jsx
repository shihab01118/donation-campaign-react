import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import PropTypes from "prop-types";

const Categories = ({ categories, searchText }) => {
    
  const [categoryArray, setCategoryArray] = useState([]);
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    const matchedCategories = categories?.filter(
      (category) =>
        category.category_name.toLowerCase() === searchText.toLowerCase()
    );

    if (matchedCategories.length) {
      setCategoryArray(matchedCategories);
      setIsFound(true);
    }
    else {
      setCategoryArray(categories);
    }
  }, [categories, searchText]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-16">
      {

        isFound 
          ? categoryArray?.map((category, idx) => (
              <CategoryCard key={idx} category={category}></CategoryCard>
            ))
          : categories?.map((category, idx) => (
              <CategoryCard key={idx} category={category}></CategoryCard>   
            ))

      }
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  searchText: PropTypes.string,
};

export default Categories;
