import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Donations from "../pages/Donations/Donations";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../pages/Donations/DonationDetails";
import ErrorPage from "../pages/Error/ErrorPage";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/donationsCategories.json')
            },
            {
                path: '/donations',
                element: <Donations></Donations>
            },
            {
                path: '/donation/:id',
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('/donationsCategories.json')
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('/donationsCategories.json')
            },
        ]
    }
])


export default myCreatedRoute;