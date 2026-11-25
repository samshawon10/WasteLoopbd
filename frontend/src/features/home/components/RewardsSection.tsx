
import {
  Gift,
  Trophy,
  Star,
  ArrowRight,
  Recycle,
} from "lucide-react";

const rewards = [
  {
    icon: Recycle,
    title: "Recycle Waste",
    description: "Earn points for eligible and verified waste contributions.",
  },
  {
    icon: Star,
    title: "Level Up",
    description: "Unlock achievements as your environmental contribution grows.",
  },
  {
    icon: Gift,
    title: "Redeem Rewards",
    description: "Use your points for offers from participating green businesses.",
  },
];

export default function RewardsSection() {
  return (
    <section className="overflow-hidden bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Green Points & Rewards
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#17231D] sm:text-5xl">
            Good Habits.
            <span className="text-green-700"> Real Rewards.</span>
          </h2>

          <p className="mt-6 leading-8 text-[#66736A]">
            Make sustainable actions more rewarding. Contribute
            eligible recyclable waste, earn Green Points after
            verification and redeem them for participating offers.
          </p>

          <div className="mt-9 space-y-7">
            {rewards.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#17231D]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#66736A]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="/register"
            className="mt-9 inline-flex items-center gap-2 font-semibold text-green-800 hover:text-green-600"
          >
            Start Earning Green Points <ArrowRight size={18} />
          </a>
        </div>

        <div className="relative rounded-[2rem] bg-[#14532D] p-8 text-white sm:p-12">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-lime-400/20 blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-100">
                Your Green Journey
              </span>
              <Trophy className="text-lime-300" size={26} />
            </div>

            <div className="mt-12">
              <p className="text-sm text-green-100">Green Points</p>
              <h3 className="mt-2 text-6xl font-bold tracking-tight">
                250
              </h3>
              <p className="mt-3 text-sm text-green-100/70">
                Illustrative dashboard preview
              </p>
            </div>

            <div className="mt-12 rounded-2xl border border-white/15 bg-white/10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-100">Current Level</p>
                  <p className="mt-2 text-2xl font-bold">Silver</p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lime-300/20 text-lime-300">
                  <Star size={28} />
                </div>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-2/3 rounded-full bg-lime-300" />
              </div>

              <p className="mt-3 text-xs text-green-100/70">
                Sample progress indicator
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-green-100">
              <Gift size={19} className="text-lime-300" />
              Rewards from participating eco-friendly businesses
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
