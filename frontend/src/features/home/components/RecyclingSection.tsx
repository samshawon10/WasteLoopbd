
import { Recycle, Leaf, PackageCheck, ArrowRight } from "lucide-react";

const categories = [
  { name: "Plastic", description: "Bottles, containers and packaging", icon: "♻️" },
  { name: "Paper", description: "Newspapers, cardboard and paper", icon: "📦" },
  { name: "Glass", description: "Bottles and reusable glass items", icon: "🍶" },
  { name: "Metal", description: "Aluminium, steel and metal scraps", icon: "🔩" },
  { name: "Organic", description: "Food scraps and organic waste", icon: "🌱" },
  { name: "E-Waste", description: "Electronic items and components", icon: "🔋" },
];

export default function RecyclingSection() {
  return (
    <section id="recycling" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Responsible Recycling
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#17231D] sm:text-5xl">
            Give Waste a
            <span className="text-green-700"> Second Life.</span>
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-[#66736A]">
            Not all waste is worthless. WasteLoopBD helps connect
            collected materials with appropriate recycling and
            recovery channels to support a circular economy.
          </p>

          <div className="mt-9 space-y-5">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                <PackageCheck />
              </div>
              <div>
                <h3 className="font-bold text-[#17231D]">
                  Verified Waste Collection
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#66736A]">
                  Track collected materials and their verified weights.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                <Recycle />
              </div>
              <div>
                <h3 className="font-bold text-[#17231D]">
                  Responsible Material Recovery
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#66736A]">
                  Connect recyclable materials with recycling centers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                <Leaf />
              </div>
              <div>
                <h3 className="font-bold text-[#17231D]">
                  Environmental Contribution
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#66736A]">
                  Track estimated environmental benefits from recycling.
                </p>
              </div>
            </div>
          </div>

          <a
            href="/register"
            className="mt-9 inline-flex items-center gap-2 font-semibold text-green-800 hover:text-green-600"
          >
            Join the Recycling Movement <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-green-100 bg-[#F7F9F5] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-3xl">{category.icon}</span>
              <h3 className="mt-5 font-bold text-[#17231D]">
                {category.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#66736A]">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
