import { useEffect, useState } from "react";
import DonationCard from "../../components/DonationCard/DonationCard";

const Donations = () => {
  const [categories, setCategories] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const donationCategories = JSON.parse(localStorage.getItem("donations"));

    if (donationCategories) {
      setCategories(donationCategories);
    } else {
      setIsAdded("No Categories Added Yet!");
    }
  }, []);

  return (
    <div>
      {isAdded ? (
        <p className="flex justify-center items-center h-[70vh] text-xl text-[#FF444A]">
          {isAdded}
        </p>
      ) : (
        <div className="my-8">
          <div className="grid md:grid-cols-2 gap-6 ">
            {categories?.map((category, idx) => (
              <DonationCard key={idx} category={category}></DonationCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donations;
