import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "../../components/DonationCard/DonationDetailsCard";
import { Helmet } from "react-helmet-async";

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
    // console.log(matchedCategory);
    setCategory(matchedCategory);
  }, [allCategories, idInt]);

  


  return (
  <div>
    <Helmet>
      <title>Donation Page - {id}</title>
    </Helmet>
    <DonationDetailsCard category={category}></DonationDetailsCard>
  </div>
  );
};

export default DonationDetails;
