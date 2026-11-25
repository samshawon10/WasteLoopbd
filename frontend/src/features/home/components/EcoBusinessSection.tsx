
import {
  Store,
  ShoppingBag,
  Leaf,
  ArrowUpRight,
} from "lucide-react";

const businessTypes = [
  {
    icon: Store,
    title: "Eco-friendly Shops",
    description: "Discover businesses offering sustainable everyday products.",
  },
  {
    icon: ShoppingBag,
    title: "Sustainable Products",
    description: "Explore reusable, recycled and environmentally responsible goods.",
  },
  {
    icon: Leaf,
    title: "Green Business Network",
    description: "Connect with businesses supporting a circular economy.",
  },
];

export default function EcoBusinessSection() {
  return (
    <section id="eco-business" className="bg-[#F7F9F5] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Green Business Ecosystem
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#17231D] sm:text-5xl">
            Shop Better.
            <span className="text-green-700"> Live Greener.</span>
          </h2>

          <p className="mt-5 leading-8 text-[#66736A]">
            Discover eco-friendly shops and businesses that make
            sustainable choices easier for everyone.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {businessTypes.map((business) => {
            const Icon = business.icon;

            return (
              <div
                key={business.title}
                className="rounded-2xl border border-green-100 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                  <Icon size={26} />
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#17231D]">
                  {business.title}
                </h3>

                <p className="mt-3 min-h-14 text-sm leading-7 text-[#66736A]">
                  {business.description}
                </p>

                <a
                  href="/register"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-green-800 hover:text-green-600"
                >
                  Get Started <ArrowUpRight size={17} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
