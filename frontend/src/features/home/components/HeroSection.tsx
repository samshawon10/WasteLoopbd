
import { ArrowRight, Play, Recycle, Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F7F9F5]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800">
            <Leaf size={16} />
            Building a Greener Dhaka
          </div>

          <h1 className="max-w-xl text-5xl leading-[1.12] font-bold tracking-tight text-[#17231D] sm:text-6xl lg:text-7xl">
            Waste Less.
            <br />
            <span className="text-green-700">Live Greener.</span>
            <br />
            Create Impact.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#66736A] sm:text-lg">
            Turn everyday waste into valuable resources. Join
            WasteLoopBD and help build a cleaner, smarter and
            more sustainable Dhaka through recycling and reuse.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/register"
              className="inline-flex items-center gap-2 rounded-full bg-green-800 px-7 py-4 font-semibold text-white transition hover:bg-green-900"
            >
              Get Started <ArrowRight size={18} />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-700 transition hover:border-green-700 hover:text-green-700"
            >
              <Play size={16} /> Explore How
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-green-100 pt-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-800">
              <Recycle size={22} />
            </div>
            <div>
              <p className="font-semibold text-[#17231D]">
                One city. One sustainable future.
              </p>
              <p className="mt-1 text-sm text-[#66736A]">
                Towards a Cleaner, Smarter and Greener Dhaka.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[3rem] bg-green-200/30 blur-3xl" />

          <img
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1100&q=85"
            alt="Sustainable waste management and recycling"
            className="relative h-[380px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[500px]"
          />

          <div className="absolute -bottom-6 left-5 rounded-2xl border border-green-100 bg-white p-5 shadow-xl sm:left-[-25px]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Leaf size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Every action matters
                </p>
                <p className="text-xs text-gray-500">
                  Make your waste count.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
