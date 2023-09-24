import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>
    }
])


export default myCreatedRoute;