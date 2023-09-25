import { useLoaderData } from "react-router-dom";


const Statistics = () => {

    const categories = useLoaderData();
    console.log(categories)

    return (
        <div>
            
        </div>
    );
};

export default Statistics;