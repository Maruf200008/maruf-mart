"use client";

import { useGetJustForYouQuery } from "@/app/redux/justForYou/justForYouApi";
import JFCard from "./JFCard";

const JFCards = () => {
  const { isLoading, isError, data: products } = useGetJustForYouQuery();

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>Somthing is error</div>;
  } else if (!isLoading && !isError && products.length === 0) {
    content = <div>No categories found!!</div>;
  } else if (!isLoading && !isError && products.length > 0) {
    content = products.map((product) => (
      <JFCard key={product.id} product={product} />
    ));
  }

  return (
    <div className=" mx-14">
      <div className=" grid grid-cols-5 gap-7">{content}</div>
    </div>
  );
};

export default JFCards;
