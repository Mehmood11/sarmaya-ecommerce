"use client";
import { useProductListQuery } from "@/services/product-api/product-api";
import { productArrayFunc } from "@/store/product-slice/product-slice";
import { useDispatch, useSelector } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function ProductList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state?.product?.productArray);
  const { data, isLoading }: any = useProductListQuery(null);

  const addToCart = (product: any) => {
    const filteredArray = productList?.findIndex(
      (items: any) => items?.id === product?.id
    );

    if (filteredArray === -1) {
      dispatch(productArrayFunc(product));
      toast.success("Item Successfully");
    } else toast.error("Item already Exists");
  };

  if (isLoading) {
    return (
      <div className="border shadow rounded-md p-4 w-full mx-auto">
        <h1 className="mb-3 text-2xl font-semibold">Products</h1>

        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-20 bg-slate-200 rounded col-span-2"></div>
                <div className="h-20 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="px-2">
      <h1 className="mb-3 text-2xl font-semibold">Products</h1>
      <div className="grid grid-cols-4 gap-3 rounded-md">
        {data?.map((product: any) => (
          <div className=" flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
            <div>
              <img
                src={product?.image}
                alt="product image"
                className="h-60 w-full object-cover rounded-lg"
              />

              <div className="p-5 text-black">
                <h5 className="mb-2 text-2xl font-bold text-black">
                  {product?.title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product?.category}
                </p>
                <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
                  {product?.description}
                </p>
                <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
                  Price: {product?.price}
                </p>
              </div>
            </div>
            <div className="p-3">
              <button className="w-full bg-black p-4 rounded-md text-white">
                <Link
                  href={{
                    pathname: `product/details`,
                    query: { id: product?.id },
                  }}
                >
                  <div className="flex align-middle justify-center">
                    {" "}
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6  ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                </Link>
              </button>
              <button
                className="mt-3 w-full bg-black p-4 rounded-md text-white"
                onClick={() => {
                  addToCart(product);
                }}
              >
                <div className="flex align-middle justify-center">
                  {" "}
                  Add to Cart{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
