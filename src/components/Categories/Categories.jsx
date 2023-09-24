import CategoryCard from "./CategoryCard";


const Categories = ({categories}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-14">
            {
                categories?.map((category, idx) => <CategoryCard key={idx} category={category}></CategoryCard>)
            }
        </div>
    );
};

export default Categories;