import React from "react";
import { useParams } from "react-router";
import { useSingleProducthooks } from "../hooks/productHooks";

const ProductDetailsPage = () => {
const{id}= useParams();
console.log(id);

const {data,isPending,error}= useSingleProducthooks(id)
if(isPending) return "Product is loading"
if(error) return "Details cannot be fetched"

console.log(data);


  return (
    <main className="min-h-screen bg-[#faf9f7] px-6 py-10 text-[#111111] md:px-12 md:py-16">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          aria-label="Product image"
          className="flex aspect-[4/5] w-full items-center justify-center border border-[#111111]/15 bg-[#f4f3f1]"
        >
          <span className="material-symbols-outlined text-5xl text-[#111111]/30">
        <img src={data.images[0].url} alt="" />
          </span>
        </div>

        <section className="flex flex-col gap-6 lg:py-8">
          <h1 className="font-headline-md text-3xl font-medium tracking-tight sm:text-4xl">
            {}
          </h1>

          <p className="font-body-md text-xl font-semibold">₹0.00</p>

          <p className="max-w-xl font-body-md text-sm leading-7 text-[#111111]/70 sm:text-base">
            Product description will appear here.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <button
              className="flex flex-1 items-center justify-center gap-2 bg-[#111111] px-6 py-4 font-label-caps text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#333333]"
              type="button"
            >
              Buy Now
            </button>
            <button
              className="flex flex-1 items-center justify-center gap-2 border border-[#111111] bg-transparent px-6 py-4 font-label-caps text-xs font-bold uppercase tracking-widest text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
