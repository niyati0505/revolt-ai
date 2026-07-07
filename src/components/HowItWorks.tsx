import { ScanLine, BrainCircuit, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Scan Battery",
      description:
        "Scan the battery QR code or connect the vehicle using OBD diagnostics.",
      icon: ScanLine,
    },
    {
      number: "02",
      title: "AI Analysis",
      description:
        "ReVolt AI analyzes battery health, degradation, charging cycles and predicts remaining life.",
      icon: BrainCircuit,
    },
    {
      number: "03",
      title: "Generate Passport",
      description:
        "Receive a secure QR-verified Digital Battery Passport that can be shared instantly.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-[#08182d] py-28">
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            PROCESS
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            How It Works
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Three simple steps to generate your AI-powered Digital Battery Passport.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/5 to-transparent" />

                {/* Icon */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-500/20">
                  <Icon
                    size={32}
                    className="text-cyan-400 transition-transform duration-500 group-hover:rotate-6"
                  />
                </div>

                {/* Number */}
                <p className="relative mt-6 text-5xl font-black text-white/10 transition-all duration-500 group-hover:text-cyan-400/30">
                  {step.number}
                </p>

                {/* Title */}
                <h3 className="relative mt-4 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="relative mt-5 leading-8 text-slate-400">
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