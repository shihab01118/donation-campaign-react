const Banner = () => {
  return (
    <div className="flex justify-center flex-col min-h-[65vh]">
      <div>
        <h2 className="text-5xl font-bold text-center text-[#0B0B0B]">
          I Grow By Helping People In Need
        </h2>
      </div>
      <div className="form-control mt-10 mx-auto">
        <div className="input-group w-[400px]">
          <input
            type="text"
            placeholder="Search here...."
            className="input input-bordered w-full"
          />
          <button className="btn bg-[#FF444A] text-white font-semibold capitalize">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
