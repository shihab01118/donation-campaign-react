// import { useState } from "react";
import { Form } from "react-router-dom";
// import PropTypes from 'prop-types';

const Banner = () => {
  // const [inputValue, setInputValue] = useState('')

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const searchtext = e.target.input.value;
  //   setInputValue(searchtext);
  // };
  return (
    <div className="flex justify-center flex-col min-h-[65vh]">
      <div className="mx-8 md:mx-16 lg:mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#0B0B0B]">
          I Grow By Helping People In Need
        </h2>
      </div>
      <Form className="w-fit mx-auto">
        <div className="mt-5 md:mt-7 lg:mt-10 mx-auto">
          <div className="input-group lg:w-[400px]">
            <input
              type="text"
              name="input"
              placeholder="Search here...."
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              className="btn bg-[#FF444A] text-white font-semibold capitalize"
              value="Search"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Banner;
