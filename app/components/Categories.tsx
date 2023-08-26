import Categorie from "./Categorie";

const Categories = () => {
  return (
    <div className="max-w-screen-2xl space-y-5  mx-auto p-4">
      <p className=" text-2xl font-bold text-neutral-700">Categories</p>
      <div className=" grid grid-cols-8 gap-x-5 gap-y-10  mx-14">
        <Categorie />
        <Categorie />
        <Categorie />
        <Categorie />
        <Categorie />
        <Categorie />
        <Categorie />
        <Categorie />
        <Categorie />
        <Categorie />
        <Categorie />
        <Categorie />
      </div>
    </div>
  );
};

export default Categories;
