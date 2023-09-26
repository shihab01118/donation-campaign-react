import { useEffect, useState } from "react";


const useGetDonationData = () => {

    const [donationData, setDonationData] =useState();

    useEffect(() => {
        fetch('/donationsCategories.json')
            .then(res => res.json())
            .then(data => setDonationData(data))
    },[])
    
    return [donationData]
};

export default useGetDonationData;