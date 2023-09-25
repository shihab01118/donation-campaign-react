
import Swal from "sweetalert2";

const DonationDetailsCard = ({category}) => {
    const { title, image, description, amount, text_or_button_color, id } = category || {};

    
  const handledonate =() => {
    const donationsArray = [];
    const donationCategories = JSON.parse(localStorage.getItem("donations"));
    if (!donationCategories) {
      donationsArray.push(category);
      localStorage.setItem("donations", JSON.stringify(donationsArray));
      Swal.fire({
        icon: 'success',
        title: `You've Donated Successfully!!`,
    })
    } else {
      const isExist = donationCategories.find((category) => category.id === id);

      if (!isExist) {
        donationsArray.push(...donationCategories, category);
        localStorage.setItem("donations", JSON.stringify(donationsArray));
        Swal.fire({
            icon: 'success',
            title: `You've Donated Successfully!!`,
        })
      }
      else {
        Swal.fire({
            icon: 'error',
            title: 'Already Donated!',
        })
      }
    }
  }

    return (
        <div className="w-[75%] mx-auto">
        <div className="relative">
            <div><img src={image} alt="" className="w-full h-[75vh] rounded-xl" /></div>
            <div className="p-7 bg-gray-800 absolute inset-0 h-[104px] top-[calc(100%-104px)] opacity-70" style={{borderRadius: '0 0 12px 12px'}}>
                <button 
                onClick={handledonate}
                className="btn text-white font-semibold capitalize opacity-100" style={{backgroundColor:text_or_button_color}}>Donate ${amount}</button>
            </div>
        </div>
        <div className="mt-8">
            <h2 className="text-4xl font-bold text-[#0B0B0B] mb-3">{title}</h2>
            <p className="leading-7 text-justify text-gray-700">{description}</p>
        </div>
    </div>
    );
};

export default DonationDetailsCard;