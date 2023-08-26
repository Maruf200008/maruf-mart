import JFCards from "./JFCards";

const JustForYou = () => {
  return (
    <div className=" bg-neutral-50 mt-16">
      <div className="max-w-screen-2xl space-y-5 mx-auto p-4">
        <p className=" text-2xl font-bold text-neutral-700">Just For You</p>
        <JFCards />
      </div>
    </div>
  );
};

export default JustForYou;
