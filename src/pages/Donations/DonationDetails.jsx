import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const DonationDetails = () => {
  const [category, setCategory] = useState({});
  const { id } = useParams();
  const idInt = parseInt(id);
  const allCategories = useLoaderData();
  //   console.log(allCategories);
  useEffect(() => {
    const matchedCategory = allCategories?.find(
      (category) => category.id === idInt
    );
    // console.log(matchedCategory)
    setCategory(matchedCategory);
  }, [allCategories, idInt]);

  const { title, image, description, amount } = category || {};

  const handledonate =() => {
    Swal.fire({
        icon: 'success',
        title: 'Thank You',
        text: `You Just Donated $ ${amount}`
    })
  }

  return (
    <div className="w-[75%] mx-auto">
        <div className="relative">
            <div><img src={image} alt="" className="w-full h-[75vh] rounded-xl" /></div>
            <div className="p-7 bg-gray-800 absolute inset-0 h-[104px] top-[calc(100%-104px)] opacity-70" style={{borderRadius: '0 0 12px 12px'}}>
                <button 
                onClick={handledonate}
                className="btn bg-[#FF444A] text-white font-semibold capitalize opacity-100">Donate ${amount}</button>
            </div>
        </div>
        <div className="mt-8">
            <h2 className="text-4xl font-bold text-[#0B0B0B] mb-3">{title}</h2>
            <p className="leading-7 text-justify text-gray-700">{description}</p>
        </div>
    </div>
  );
};

export default DonationDetails;
