import { useEffect, useState } from "react";
import DonationCard from "../../components/DonationCard/DonationCard";
import { Helmet } from "react-helmet-async";

const Donations = () => {
  const [categories, setCategories] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const [isSeeAll, setIsSeeAll] = useState(false);

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
      <Helmet>
        <title>Donation Campaign | Donation</title>
      </Helmet>
      {isAdded ? (
        <p className="flex justify-center items-center h-[70vh] text-xl text-[#FF444A]">
          {isAdded}
        </p>
      ) : (
        <div className="my-8 mx-8 md:mx-16 lg:mx-auto lg:container">
          <div className="grid lg:grid-cols-2 gap-6 ">
            {isSeeAll
              ? categories?.map((category, idx) => (
                  <DonationCard key={idx} category={category}></DonationCard>
                ))
              : categories
                  .slice(0, 4)
                  ?.map((category, idx) => (
                    <DonationCard key={idx} category={category}></DonationCard>
                  ))}
          </div>
          <div className="mt-6 text-center">
            {categories.length > 4 ? (
              <button
                onClick={() => setIsSeeAll(true)}
                className={isSeeAll ? 'hidden' : "btn bg-[#FF444A] text-white font-semibold capitalize"}
              >
                see all
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donations;
