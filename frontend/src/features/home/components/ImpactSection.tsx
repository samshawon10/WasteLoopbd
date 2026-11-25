
import { Recycle, Leaf, Users, Building2 } from "lucide-react";

const impactItems = [
  {
    icon: Recycle,
    value: "01",
    label: "Waste Collection",
    description: "Make responsible waste disposal part of everyday life.",
  },
  {
    icon: Leaf,
    value: "02",
    label: "Environmental Impact",
    description: "Track your contribution towards a cleaner environment.",
  },
  {
    icon: Users,
    value: "03",
    label: "Community Participation",
    description: "Connect citizens through sustainable actions.",
  },
  {
    icon: Building2,
    value: "04",
    label: "Green Businesses",
    description: "Support eco-friendly shops and circular businesses.",
  },
];

export default function ImpactSection() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Our Mission
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17231D] sm:text-4xl">
            Small Actions. <span className="text-green-700">Big Impact.</span>
          </h2>

          <p className="mt-5 leading-7 text-[#66736A]">
            WasteLoopBD brings citizens, collectors, recycling centers
            and green businesses together to build a circular economy
            for Dhaka.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.value}
                className="rounded-2xl border border-green-100 bg-[#F7F9F5] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                    <Icon size={23} />
                  </div>
                  <span className="text-sm font-semibold text-green-700">
                    {item.value}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold text-[#17231D]">
                  {item.label}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#66736A]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
