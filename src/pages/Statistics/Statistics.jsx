import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DonationChart from "../../components/DonationChart/DonationChart";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
  const categories = useLoaderData();
  const [donation, setDonation] = useState(0);
  const [remainingDonation, setRemainingDonation] = useState(categories.length);
  const [donationCount, setDonationCount] = useState(0);
  const [remainingDonationCount, setRemainingDonationCount] = useState(
    categories.length
  );

  //   console.log(categories);

  useEffect(() => {
    const donatedCategories = JSON.parse(localStorage.getItem("donations"));
    // console.log(donatedCategories);

    if (donatedCategories) {
      setDonationCount(donatedCategories.length);
      setRemainingDonationCount(categories.length - donationCount);
      setDonation((donatedCategories.length * 100) / categories.length);
      setRemainingDonation(100 - donation);
    }
  }, [donation, categories.length, donationCount]);

  return (
    <div>
      <Helmet>
        <title>Donation Campaign | Statistics</title>
      </Helmet>
      <div className="w-fit mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          See Donation Ratio
        </h2>
        <div className="flex flex-col md:flex-row md:gap-10 mt-5">
          <div className="flex items-center gap-2">
            <div className="bg-[#00C49F] h-6 w-6 rounded"></div>
            <p className="text-xl font-medium">{`Your Donations: ${donationCount}`}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#FF444A] h-6 w-6 rounded"></div>
            <p className="text-xl font-medium">{`Remaining Donations: ${remainingDonationCount}`}</p>
          </div>
        </div>
      </div>
      <div className="-mt-20 lg:-mt-16 flex justify-center">
        <DonationChart
          donation={donation}
          remainingDonation={remainingDonation}
        ></DonationChart>
      </div>
    </div>
  );
};

export default Statistics;
