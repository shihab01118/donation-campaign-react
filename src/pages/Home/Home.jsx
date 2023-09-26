import { useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";

import Header from "../../components/Header/Header";
import { useState } from "react";


const Home = () => {
    const [searchText, setSearchText] = useState('')
    const categories = useLoaderData()
    const handleSearch = (searchValue) => {
        setSearchText(searchValue)
    }
    return (
        <div>
            <Header handleSearch={handleSearch}></Header>
            <div className="mx-8 md:mx-16 lg:mx-auto lg:container">
            {
                <Categories categories={categories} searchText={searchText}></Categories>
            }
            </div>
        </div>
    );
};

export default Home;