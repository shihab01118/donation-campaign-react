import { useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";

import Header from "../../components/Header/Header";


const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Header></Header>
            <div className="mx-8 md:mx-16 lg:mx-auto lg:container">
            {
                <Categories categories={categories}></Categories>
            }
            </div>
        </div>
    );
};

export default Home;