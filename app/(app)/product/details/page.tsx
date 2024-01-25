import { ProductDetails } from "@/section/product-details";
import React from "react";

const page = (props: any) => {
  return <ProductDetails id={props?.searchParams?.id} />;
};

export default page;
