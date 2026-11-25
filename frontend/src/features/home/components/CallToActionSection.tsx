
import { ArrowRight, Leaf } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-green-900 px-7 py-16 text-center text-white sm:px-14 sm:py-20">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lime-300/20 text-lime-300">
            <Leaf size={28} />
          </div>

          <h2 className="mt-7 text-3xl font-bold leading-tight sm:text-5xl">
            Be Part of the Change.
            <span className="text-lime-300"> Start Today.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-green-100/80">
            Join a growing community working towards a cleaner,
            smarter and greener Dhaka. Your everyday actions
            can make a meaningful difference.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="/register"
              className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-7 py-4 font-bold text-green-950 transition hover:bg-lime-200"
            >
              Join WasteLoopBD <ArrowRight size={18} />
            </a>

            <a
              href="/login"
              className="rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

