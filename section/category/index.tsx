"use client";
import { useCategoriesListQuery } from "@/services/product-api/product-api";
import { useRouter } from "next/navigation";

export function Category() {
  const router = useRouter();
  const { data, isLoading } = useCategoriesListQuery(null);

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
    <div className="py-1 px-8 mt-20 h-full">
      <h1 className="mb-3 text-2xl font-semibold">Categories</h1>
      <div className="grid grid-cols-3 gap-4">
        {data?.map((category: any) => {
          return (
            <div
              key={category}
              className="h-80 border rounded-md flex justify-center items-center bg-slate-200 cursor-pointer"
              onClick={() => router.push(`/product?cat=${category}`)}
            >
              <h1>{category}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
