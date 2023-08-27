import JFCards from "./JFCards";

const JustForYou = () => {
  return (
    <div className=" bg-neutral-50 mt-16">
      <div className="max-w-screen-2xl space-y-5 mx-auto p-4">
        <p className=" text-2xl font-bold text-neutral-700">Just For You</p>
        <JFCards />

        <div className="mx-auto text-center">
          <button className=" my-10 uppercase border-2 px-10 py-2 border-[#009999] hover:bg-[#009999] hover:text-white text-[#009999] transition">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default JustForYou;
