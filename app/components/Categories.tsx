"use client";

import { useGetCategoriesQuery } from "../redux/categories/categoriesApi";
import Categorie from "./Categorie";

const Categories = () => {
  const { isLoading, isError, data: categories } = useGetCategoriesQuery();

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>Somthing is error</div>;
  } else if (!isLoading && !isError && categories.length === 0) {
    content = <div>No categories found!!</div>;
  } else if (!isLoading && !isError && categories.length > 0) {
    content = categories.map((categori) => (
      <Categorie key={categori.id} categori={categori} />
    ));
  }
  return (
    <div className="max-w-screen-2xl space-y-5  mx-auto p-4">
      <p className=" text-2xl font-bold text-neutral-700">Categories</p>
      <div className=" grid grid-cols-8 gap-x-5 gap-y-10  mx-14">{content}</div>
    </div>
  );
};

export default Categories;
