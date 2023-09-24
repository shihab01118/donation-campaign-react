import { useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";


const Home = () => {
    const categories = useLoaderData()
    return (
        <div className="container mx-auto">
            {
                <Categories categories={categories}></Categories>
            }
        </div>
    );
};

export default Home;