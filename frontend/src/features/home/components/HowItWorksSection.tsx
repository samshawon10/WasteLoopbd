
import { ClipboardList, Truck, Recycle, Gift } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Request Collection",
    description: "Submit a waste pickup request and select your waste category.",
  },
  {
    number: "02",
    icon: Truck,
    title: "Get It Collected",
    description: "A designated collector picks up and verifies your waste.",
  },
  {
    number: "03",
    icon: Recycle,
    title: "Recycle & Reuse",
    description: "Collected materials move into recycling and reuse channels.",
  },
  {
    number: "04",
    icon: Gift,
    title: "Earn Green Points",
    description: "Receive points for eligible, verified waste contributions.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#F7F9F5] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Simple Process
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17231D] sm:text-4xl">
            How WasteLoopBD <span className="text-green-700">Works</span>
          </h2>

          <p className="mt-5 leading-7 text-[#66736A]">
            From responsible disposal to meaningful environmental
            impact, every step contributes to a greener Dhaka.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <span className="text-sm font-bold tracking-widest text-green-700">
                  STEP {step.number}
                </span>

                <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-800 text-white">
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#17231D]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#66736A]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
