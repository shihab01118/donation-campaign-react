import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-1">
            <p className="text-xl text-[#FF444A] font-medium">No Page Found</p>
            <Link to="/">
            <button className="btn-sm rounded-md bg-[#FF444A] text-white font-semibold capitalize">
            Go Home
          </button>
            </Link>
        </div>
    );
};

export default ErrorPage;