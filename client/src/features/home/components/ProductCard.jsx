import React from "react";

const ProductCard = ({
  category,
  badge,
  badgeClassName,
  image,
  imageAlt,
  imageClassName = "",
  stock,
  stockClassName,
  sku,
  title,
  description,
  price,
  originalPrice,
  buttonLabel = "Add to Bag",
  buttonIcon = "shopping_bag",
  buttonDisabled = false,
  showQuickView = true,
  cardClassName = "",
}) => (
  <article
    className={`group flex flex-col justify-between border border-[#111111]/15 bg-white transition-all duration-200 hover:border-[#111111] ${cardClassName}`}
  >
    <div className="relative flex aspect-square items-center justify-center overflow-hidden border-b border-[#111111]/10 bg-[#f4f3f1] p-6">
      <span className="absolute left-3 top-3 z-10 border border-[#111111]/30 bg-white px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest">
        {category}
      </span>
      <span
        className={`absolute right-3 top-3 z-10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest ${badgeClassName}`}
      >
        {badge}
      </span>
      <img
        className={`h-full w-full object-contain mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-105 ${imageClassName}`}
        src={image}
        alt={imageAlt}
      />
      {showQuickView && (
        <button
          type="button"
          className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-1 bg-[#111111]/90 py-2.5 font-label-caps text-[11px] uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100"
        >
          <span className="material-symbols-outlined text-[16px]">visibility</span>
          <span>Quick View</span>
        </button>
      )}
    </div>

    <div className="flex flex-1 flex-col justify-between p-5">
      <div>
        <div className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-wider text-[#111111]/60">
          <span className={`flex items-center gap-1 font-medium ${stockClassName}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {stock}
          </span>
          <span>{sku}</span>
        </div>
        <h2 className="font-headline-sm text-lg font-normal leading-snug group-hover:underline md:text-xl">
          {title}
        </h2>
        <p className="mt-2 line-clamp-2 font-body-sm text-xs leading-relaxed text-[#111111]/65">
          {description}
        </p>
      </div>

      <div className="mt-6 border-t border-[#111111]/10 pt-4">
        <div className="mb-3 flex items-baseline gap-2">
          <span className="font-body-md text-lg font-bold text-[#111111]">{price}</span>
          <span className="font-body-sm text-xs text-[#111111]/40 line-through">
            {originalPrice}
          </span>
        </div>
        <button
          type="button"
          disabled={buttonDisabled}
          className={`flex w-full items-center justify-center gap-2 border py-2.5 px-4 font-label-caps text-xs font-bold uppercase tracking-[0.16em] transition-all ${
            buttonDisabled
              ? "cursor-not-allowed border-[#111111]/20 bg-[#f4f3f1] text-[#111111]/50"
              : "border-[#111111] bg-[#111111] text-[#faf9f7] hover:bg-black hover:text-white"
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">{buttonIcon}</span>
          <span>{buttonLabel}</span>
        </button>
      </div>
    </div>
  </article>
);

export default ProductCard;
