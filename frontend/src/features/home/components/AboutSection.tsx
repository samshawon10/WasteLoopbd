
import {
  ArrowUpRight,
  Recycle,
  Target,
  Eye,
  Leaf,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make waste management accessible, rewarding, and efficient by connecting citizens, collectors, recyclers, and green businesses.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To build a cleaner, smarter, and greener Dhaka through responsible resource management and a community-driven circular economy.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-800">
            <Leaf size={16} />
            About WasteLoopBD
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#17231D] sm:text-4xl lg:text-5xl">
            Turning Waste Into
            <span className="text-green-700"> Opportunities.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-500">
            WasteLoopBD is a Dhaka-focused circular economy platform
            designed to transform how communities manage, recycle,
            reuse, and create value from waste.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=85"
              alt="Responsible waste recycling and environmental sustainability"
              className="h-[420px] w-full rounded-3xl object-cover"
            />

            <div className="absolute -bottom-6 right-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl sm:right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <Recycle size={25} />
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    Circular Economy
                  </p>
                  <p className="text-xs text-gray-500">
                    Reduce · Reuse · Recycle
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
              Why WasteLoopBD?
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-[#17231D]">
              A smarter way to manage waste and protect our future.
            </h3>

            <p className="mt-6 text-sm leading-8 text-gray-500">
              Traditional waste management often treats waste as something
              to discard. WasteLoopBD takes a different approach by
              connecting the people and organizations that can give
              discarded materials a second life.
            </p>

            <p className="mt-4 text-sm leading-8 text-gray-500">
              From household collection requests to recycling,
              reusable product exchange, and green rewards, our platform
              encourages responsible participation and supports a more
              sustainable local economy.
            </p>

            <a
              href="#how-it-works"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-800 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-900"
            >
              Explore How It Works
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-100 bg-[#F7F9F5] p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#17231D]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
