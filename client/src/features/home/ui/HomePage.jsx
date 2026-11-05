import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    category: "Electronics",
    badge: "-18%",
    badgeClassName: "bg-[#111111] text-white",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdZToEhu43Li4gdpUoa5k64mvPwpgRv7xKzrpLZy6dH13S633lYMZduyNC9JpLct1eBYNc6aTGWW3-hFeBy4wHyag7YFXmzU-oU6zETXb5eXcszZ6129mdMyygN-IPR-nly6XtLa_16YQiOgppBKo5FeUqIkgV80qvsra3ioAfRyR9_sorOTzCbCiD9Ey1cSy1UPn0eKrXHzboYpucH3ToSYWBFyQG8TeXJxva7nk",
    imageAlt: "Sony WH-1000XM5",
    stock: "In Stock: 12 Left",
    stockClassName: "text-emerald-700",
    sku: "SKU-SNY89",
    title: "Sony WH-1000XM5 ANC",
    description:
      "Industry-leading dual processor active noise canceling with 30-hour playback and carbon acoustic drivers.",
    price: "₹24,990",
    originalPrice: "₹30,490",
  },
  {
    category: "Accessories",
    badge: "-25%",
    badgeClassName: "bg-[#111111] text-white",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbk_ioddnBp_jRKKwAxsl4Rh3lJsuGH62Axh1Gepy_D-lK3FWGkH8X9MLddRaRUGyAKSR-Ic_B3W9u-QA6i9rzj026zRJgtjxkvYFdEgSFZn-YTTFaI99rdtQpzOFLI2Zu9pxCVutV8oOSP1jIucznkEUaEffsRSkBb7cpMrkHdu_Q_iUqdh_79Pwu_oURmj3aQe4jCFqeYOZOAL5jRL9o6hcNQ-bbtLvNABGY4dM",
    imageAlt: "Minimalist Chrono Watch",
    stock: "Low Stock: 3 Left",
    stockClassName: "text-amber-700",
    sku: "SKU-CHR02",
    title: "Minimalist Chrono Watch",
    description:
      "Sapphire crystal glass casing featuring Japanese meca-quartz movement and waterproof rating to 5ATM.",
    price: "₹4,499",
    originalPrice: "₹5,999",
  },
  {
    category: "Electronics",
    badge: "Drop Only",
    badgeClassName: "bg-primary text-white",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA20QjvpLPP_uPZRjgN2E22DG5US7E87nlXijMR9_N-OkXsm0pLSZtUFxZ8JlDNL7ojXwZeXt_GsVq6KbMwfv1m-5Ecs0yHbl7t5cTLoyk0YA4OTXBbbEA915J0SQGwf8kn7BP1HDnDGPcFCKr9pYiagw_wpLcJ3QZD8TLBt073UohvKA87P8iZvGXrqYaYTYg1RzFc9e26Vk098ALCEslTneSQg5nmRrogdtxDg_w",
    imageAlt: "Mechanical Keychron Q1",
    stock: "In Stock: 7 Left",
    stockClassName: "text-emerald-700",
    sku: "SKU-KCH91",
    title: "Mechanical Keychron Q1",
    description:
      "Full CNC aluminum body, double-gasket acoustic mounting, hot-swappable tactile Gateron Jupiter switches.",
    price: "₹16,200",
    originalPrice: "₹18,500",
  },
  {
    category: "Footwear",
    badge: "Archive",
    badgeClassName: "bg-stone-300 text-stone-800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDk1gePWVqSx5sxtQ0cHBKN87nJwFScZsnOIqp3lz1FDnRuYbhbvEJL_AkYbBlT_8io3ElZcCNxm_AyrjgucYn7iL4YLaZU-ccSMRIgRxcaSmQBib4bAvuOK2Q9vJYRnoUx9cIZbnQlIth5jJFtKaSbH12yb2adv-HwAL5ou4-WPkmAJqSvoIdpcEP8PdCFnfNG7Bnb_y-Q1gKq4r0bionbtS8-myZ1hZFgjCs5y7M",
    imageAlt: "Nike Air Max Pulse",
    imageClassName: "grayscale group-hover:grayscale-0",
    stock: "Out of Stock",
    stockClassName: "text-stone-500",
    sku: "SKU-NK881",
    title: "Nike Air Max Pulse",
    description:
      "Point-loaded Air cushioning system encased in reinforced breathable mesh and synthetic leather overlays.",
    price: "₹11,995",
    originalPrice: "₹13,995",
    buttonLabel: "Waitlist Drop",
    buttonIcon: "lock",
    buttonDisabled: true,
    showQuickView: false,
    cardClassName: "opacity-80 hover:opacity-100",
  },
  {
    category: "Home & Kitchen",
    badge: "-15%",
    badgeClassName: "bg-[#111111] text-white",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoP2gJ3c9ejx31C1B7BlL0Jy5EF3504FBnLTUYJjSm1B0fvHxyE0wDcilVtjvitMcoWRLAacACANi5cBna_hyVUK03CDz-qKJR8etPMaGfA6o57QA6hcNyTD1LV5EeR5nc_Lhu8ZjTicY3x9s2Noucvv_oknw0ywbA6LXlBmYlp8gtYJS8YsNzm8NZ84A4zZp7rustlSpJLfX5gl8iCDSiM_wrlRS1et_z9WYURtI",
    imageAlt: "Ceramic Pour-Over Kettle",
    stock: "In Stock: 18 Left",
    stockClassName: "text-emerald-700",
    sku: "SKU-KTL44",
    title: "Ceramic Pour-Over Kettle",
    description:
      "Precision flow gooseneck spout with integrated internal thermometer and triple-wall thermal retention.",
    price: "₹3,250",
    originalPrice: "₹3,800",
  },
  {
    category: "Accessories",
    badge: "-10%",
    badgeClassName: "bg-[#111111] text-white",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-AeVA4QbQGCiKguVjX2OvEPLVaf54MDIoio4qr9TQvQsgcjntv20ju3IPnyoEj4FShBwP6PJarlpCRusDy1JYq7OZ-k9lxCK3Uf9M1_C2lZJ9LunC9wqZ3JjhAWOzBcA-5LnHl8EHtVoO9aTcx57m-qIDl8V_u_Ev6cB-IcPqYey7ye2rn17D2K8bnNMelcGO3QgAwhAzSI_SnCtuWEYYjhZChe-WMyQ3eAHUv3c",
    imageAlt: "Leather Everyday Tote",
    stock: "Low Stock: 2 Left",
    stockClassName: "text-amber-700",
    sku: "SKU-TOT19",
    title: "Leather Everyday Tote",
    description:
      "Full-grain saddle leather with internal padded 16-inch laptop pocket and waterproof zip closure.",
    price: "₹6,800",
    originalPrice: "₹7,500",
  },
  {
    category: "Electronics",
    badge: "Best Value",
    badgeClassName: "bg-primary text-white",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRB0tssIXtdHYCFjOrXpeboU4GmC2mkRyt-Jwzu92St_PM822LphZ5LTg4IwMJYcznntO-To-4ZX-uvZYS844N_mkI00D0dEx-fBhvmudUY4DiB9QeHx1jp5FaavzYJnXyZcYk8vm7fvu-FgTLQBdZWOqUeZpD8YmvOqnmUjvc383nwQGqy1bGEGjZWsZRY_PB2wRyiOr4vkwamIpY9Luh7lDtGNBr_jEgO_lBqRI",
    imageAlt: "Ergonomic Desk Mat",
    stock: "In Stock: 35 Left",
    stockClassName: "text-emerald-700",
    sku: "SKU-MAT04",
    title: "Ergonomic Desk Mat",
    description:
      "900x400mm waterproof high-density vegan leather with natural cork backing for glide precision.",
    price: "₹1,899",
    originalPrice: "₹2,499",
  },
  {
    category: "Electronics",
    badge: "-20%",
    badgeClassName: "bg-[#111111] text-white",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAJCjjvnVkhbAJ1DbfNBcB4tGXxfGfjCZv3vIvepPjjFEdpAuqwIR2z8FHGpwT5OP1fpkuCFRjH4eqcAPM6iFTcrUWAxgn3mCF72HIzTLmszlJWgHUb9t_niwoZSrf5Y1GV87NmC43a9nvxeKSPLJFU7ZCb7Q_8pV7Ak7LUnja0sBPw5rdv0PVyhsW93frHUW0lzZEToBLZ-U_CeV77ATQ17DSvBUIc7OnguAWQtQ",
    imageAlt: "Studio Monitor Speakers",
    stock: "In Stock: 5 Left",
    stockClassName: "text-emerald-700",
    sku: "SKU-SPK77",
    title: "Studio Monitor Speakers",
    description:
      "Bi-amplified class D acoustic architecture delivering ultra-flat frequency response for mixing.",
    price: "₹34,900",
    originalPrice: "₹42,000",
  },
];

const HomePage = () => (
  <div className="flex min-h-screen flex-col bg-[#faf9f7] text-[#111111] antialiased selection:bg-black selection:text-white">
    <header className="sticky top-0 z-50 w-full border-b border-[#111111]/10 bg-[#faf9f7]/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-6 py-4 md:px-12">
        <div className="flex shrink-0 items-center">
          <a className="group flex items-baseline gap-2" href="/">
            <span className="font-headline-md text-2xl font-black uppercase tracking-[-0.04em] text-[#111111] md:text-3xl">
              WAVESTORE
            </span>
          </a>
        </div>

        <div className="mx-2 hidden max-w-md flex-1 md:block">
          <div className="relative flex items-center">
            <span className="pointer-events-none absolute left-3 flex text-[#111111]/40">
              <span className="material-symbols-outlined text-[18px]">search</span>
            </span>
            <input
              className="w-full rounded-none border-b border-[#111111]/40 bg-transparent py-2 pl-9 pr-16 font-body-sm text-xs tracking-wide text-[#111111] transition-all placeholder:text-[#111111]/40 hover:border-[#111111] focus:border-[#111111] focus:outline-none focus:ring-0"
              placeholder="Search drops, audio gear, tactical keys..."
              type="text"
            />
            <div className="pointer-events-none absolute right-1 flex items-center gap-1 opacity-40">
              <kbd className="border border-[#111111] px-1 py-0.5 font-mono text-[9px]">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-5 font-label-caps">
          <button
            type="button"
            className="flex items-center gap-1.5 text-[#111111] transition-opacity hover:opacity-60"
            title="Shopping Bag"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span className="font-mono text-xs font-semibold underline underline-offset-4">
              (3)
            </span>
          </button>
          <div className="flex items-center gap-3 border-l border-[#111111]/20 pl-3">
            <a
              className="hidden text-xs font-bold uppercase tracking-[0.15em] text-[#111111] hover:underline sm:inline-block"
              href="#logout"
            >
              Log Out
            </a>
            <button
              type="button"
              className="flex items-center p-1 text-[#111111] hover:opacity-60"
              title="Log Out"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#111111]/10 bg-[#faf9f7]">
        <div className="custom-scroll mx-auto flex max-w-[1440px] items-center justify-between gap-4 overflow-x-auto whitespace-nowrap px-6 py-3 md:px-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider md:gap-3">
            <span className="mr-1 shrink-0 font-mono text-[10px] tracking-widest text-[#111111]/40">
              FILTER /
            </span>
            <button
              type="button"
              className="shrink-0 bg-[#111111] px-3 py-1 text-[11px] font-semibold text-[#faf9f7]"
            >
              All
            </button>
            <button
              type="button"
              className="shrink-0 border border-[#111111]/30 px-3 py-1 text-[11px] font-medium text-[#111111] transition-colors hover:border-[#111111]"
            >
              Men
            </button>
            <button
              type="button"
              className="shrink-0 border border-[#111111]/30 px-3 py-1 text-[11px] font-medium text-[#111111] transition-colors hover:border-[#111111]"
            >
              Women
            </button>
            <button
              type="button"
              className="shrink-0 border border-[#111111]/30 px-3 py-1 text-[11px] font-medium text-[#111111] transition-colors hover:border-[#111111]"
            >
              Kids
            </button>
          </div>
        </div>
      </div>
    </header>

    <main className="mx-auto w-full max-w-[1440px] flex-1 px-6 py-10 md:px-12 md:py-14">
      <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[#111111] pb-8 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            <span className="h-1.5 w-1.5 bg-primary" />
            Curated Hardware Releases &amp; Artisan Artefacts
          </div>
          <h1 className="font-headline-md text-4xl font-normal leading-[1.05] tracking-tight text-[#111111] sm:text-5xl md:text-6xl md:not-italic">
            Curated Catalog Drops
          </h1>
          <p className="mt-3 max-w-xl font-body-md text-sm font-normal leading-relaxed text-[#111111]/70 md:text-base">
            Limited manufacturing runs, premium audio peripherals, bespoke daily carry objects,
            and studio instruments calibrated for discerning workflows.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-4 font-mono text-[11px] uppercase tracking-wider">
          <span className="border border-[#111111]/30 bg-white px-3 py-1">8 of 48 Items</span>
          <span className="text-[#111111]/40">•</span>
          <span className="font-bold text-[#111111]">Currency: INR (₹)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.sku} {...product} />
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-[#111111] pt-8 font-mono text-xs sm:flex-row">
        <div className="flex items-center gap-4 text-[#111111]/70">
          <span>SHOWING 1 TO 8 OF 48 ARTIFACTS</span>
          <div className="h-1 w-24 overflow-hidden bg-stone-300">
            <div className="h-full w-1/6 bg-[#111111]" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 border border-[#111111] bg-white px-5 py-2.5 font-label-caps text-xs uppercase tracking-wider text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
          >
            <span>Load More Products</span>
            <span className="material-symbols-outlined text-[16px]">expand_more</span>
          </button>
          <div className="flex items-center gap-1 font-mono">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center bg-[#111111] font-bold text-white"
            >
              1
            </button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center border border-[#111111]/30 text-[#111111] hover:border-[#111111]"
            >
              2
            </button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center border border-[#111111]/30 text-[#111111] hover:border-[#111111]"
            >
              3
            </button>
            <span className="px-1 text-[#111111]/40">...</span>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center border border-[#111111]/30 text-[#111111] hover:border-[#111111]"
            >
              6
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 divide-y divide-[#111111] border border-[#111111] bg-white md:grid-cols-3 md:divide-x md:divide-y-0">
        <div className="flex flex-col justify-between p-6 md:p-8">
          <div className="mb-4 font-mono text-xs tracking-widest text-[#111111]/40">
            [01 / DISPATCH]
          </div>
          <h3 className="mb-2 font-headline-sm text-lg font-normal md:text-xl">
            Direct Factory Dispatch
          </h3>
          <p className="font-body-sm text-xs leading-relaxed text-[#111111]/70">
            Dispatched under sealed climate-proof nodes within 24 hours of drop. Expedited logistics
            directly from our bonded studio vaults.
          </p>
        </div>
        <div className="flex flex-col justify-between p-6 md:p-8">
          <div className="mb-4 font-mono text-xs tracking-widest text-[#111111]/40">
            [02 / PROVENANCE]
          </div>
          <h3 className="mb-2 font-headline-sm text-lg font-normal md:text-xl">
            Numbered Authenticity
          </h3>
          <p className="font-body-sm text-xs leading-relaxed text-[#111111]/70">
            Every unit is serial-etched and cryptographically verified upon unboxing with individual
            proof of origin documentation.
          </p>
        </div>
        <div className="flex flex-col justify-between p-6 md:p-8">
          <div className="mb-4 font-mono text-xs tracking-widest text-[#111111]/40">
            [03 / GUARANTEE]
          </div>
          <h3 className="mb-2 font-headline-sm text-lg font-normal md:text-xl">
            14-Day Vault Return
          </h3>
          <p className="font-body-sm text-xs leading-relaxed text-[#111111]/70">
            Zero friction return policy for unblemished hardware and collector items. Complete
            exchange or reimbursement within 14 standard days.
          </p>
        </div>
      </div>
    </main>

    <footer className="mt-16 w-full border-t border-[#111111] bg-[#111111] text-[#faf9f7]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-[#faf9f7]/20 pb-12 md:grid-cols-12">
          <div className="flex flex-col justify-between md:col-span-5">
            <div>
              <span className="mb-3 block font-headline-md text-3xl font-normal uppercase tracking-tight md:text-4xl">
                WAVESTORE
              </span>
              <p className="max-w-sm font-body-sm text-xs leading-relaxed text-[#faf9f7]/60">
                Independent retail studio pioneering limited-run manufacturing, refined audio
                equipment, tactile interfaces, and everyday architectural goods.
              </p>
            </div>
            <div className="mt-8 font-mono text-[10px] uppercase tracking-widest text-[#faf9f7]/40">
              BANGALORE / TOKYO / STOCKHOLM
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-[#faf9f7]/40">
              CATALOG
            </h4>
            <ul className="space-y-2.5 font-label-caps text-xs uppercase tracking-wider">
              <li><a className="opacity-80 hover:underline hover:opacity-100" href="#">Hardware Specs</a></li>
              <li><a className="opacity-80 hover:underline hover:opacity-100" href="#">Catalog Archive</a></li>
              <li><a className="opacity-80 hover:underline hover:opacity-100" href="#">Sound Systems</a></li>
              <li><a className="opacity-80 hover:underline hover:opacity-100" href="#">Collector Series</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-[#faf9f7]/40">
              POLICIES
            </h4>
            <ul className="space-y-2.5 font-label-caps text-xs uppercase tracking-wider">
              <li><a className="opacity-80 hover:underline hover:opacity-100" href="#">Terms of Sale</a></li>
              <li><a className="opacity-80 hover:underline hover:opacity-100" href="#">Privacy Policy</a></li>
              <li><a className="opacity-80 hover:underline hover:opacity-100" href="#">Shipping Protocol</a></li>
              <li><a className="opacity-80 hover:underline hover:opacity-100" href="#">Status Node</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-[#faf9f7]/40">
              DISPATCH BULLETIN
            </h4>
            <p className="mb-3 font-body-sm text-xs text-[#faf9f7]/60">
              Subscribe to confidential drops &amp; invitations 48 hours prior to global release.
            </p>
            <div className="flex">
              <input
                className="w-full border-b border-[#faf9f7]/40 bg-transparent py-2 font-body-sm text-xs text-[#faf9f7] placeholder:text-[#faf9f7]/40 focus:border-[#faf9f7] focus:outline-none"
                placeholder="Enter email address"
                type="email"
              />
              <button
                type="button"
                className="border-b border-[#faf9f7]/40 px-3 font-label-caps text-xs font-bold uppercase tracking-widest hover:border-[#faf9f7]"
              >
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 font-mono text-[11px] tracking-wider text-[#faf9f7]/50 sm:flex-row">
          <div>© 2025 WAVESTORE LABS. EXPERIMENTAL CURATED DROPS. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <a className="hover:underline" href="#">TERMS</a>
            <span>/</span>
            <a className="hover:underline" href="#">PRIVACY</a>
            <span>/</span>
            <a className="hover:underline" href="#">SYSTEM OK</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default HomePage;
