
import {
  ArrowUpRight,
  ShoppingBag,
  RefreshCw,
  Store,
  Leaf,
} from "lucide-react";

const benefits = [
  {
    icon: RefreshCw,
    title: "Reuse Before Discarding",
    description: "Give reusable items another opportunity instead of throwing them away.",
  },
  {
    icon: ShoppingBag,
    title: "Circular Marketplace",
    description: "Discover reusable materials and recycled products in one place.",
  },
  {
    icon: Store,
    title: "Support Green Sellers",
    description: "Connect with businesses promoting responsible consumption.",
  },
];

export default function ReSaleSection() {
  return (
    <section id="marketplace" className="bg-[#F7F9F5] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] bg-green-900 p-8 text-white sm:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lime-400/20 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-green-100">
                <ShoppingBag size={16} />
                WasteLoop ReSale
              </span>

              <h3 className="mt-10 max-w-md text-4xl font-bold leading-tight sm:text-5xl">
                One person's surplus can be another's resource.
              </h3>

              <p className="mt-6 max-w-md leading-8 text-green-100/80">
                Discover reusable materials, pre-loved products
                and recycled goods through a community-driven
                marketplace.
              </p>

              <a
                href="/register"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-bold text-green-950 transition hover:bg-lime-300"
              >
                Explore Marketplace <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="relative mt-12 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <RefreshCw size={23} className="text-lime-300" />
                <p className="mt-3 font-semibold">Reuse</p>
                <p className="mt-1 text-xs text-green-100/70">
                  Extend product life
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <Leaf size={23} className="text-lime-300" />
                <p className="mt-3 font-semibold">Recycle</p>
                <p className="mt-1 text-xs text-green-100/70">
                  Support circularity
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Reuse. Resell. Repeat.
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#17231D] sm:text-5xl">
              Discover the Value
              <span className="text-green-700"> Beyond Waste.</span>
            </h2>

            <p className="mt-6 leading-8 text-[#66736A]">
              WasteLoopBD's ReSale marketplace encourages a culture
              of reuse by bringing buyers and sellers together.
            </p>

            <div className="mt-10 space-y-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#17231D]">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#66736A]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
