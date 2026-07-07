import {
  Brain,
  BatteryCharging,
  QrCode,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "AI Battery Analysis",
      description:
        "Analyze battery health, charging cycles, and overall battery condition using intelligent diagnostics.",
      icon: Brain,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      title: "Digital Battery Passport",
      description:
        "Generate a QR-verified battery passport that builds trust between buyers, sellers, and dealerships.",
      icon: QrCode,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Battery Health Report",
      description:
        "View degradation, remaining lifespan, and performance insights through a clean AI-powered dashboard.",
      icon: BatteryCharging,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
  ];

  return (
    <section className="bg-[#071426] py-28">
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            FEATURES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            ReVolt AI combines artificial intelligence, battery analytics,
            and digital verification into one intelligent platform.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
  key={feature.title}
  className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 text-center"
>
  {/* Icon */}
  <div
    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bg} transition-all duration-300 group-hover:scale-110`}
  >
    <Icon
      size={34}
      strokeWidth={2}
      className={feature.color}
    />
  </div>

  {/* Title */}
  <h3 className="mt-8 text-2xl font-bold text-white">
    {feature.title}
  </h3>

  {/* Description */}
  <p className="mt-5 leading-8 text-slate-400">
    {feature.description}
  </p>
</div>
            );
          })}

        </div>
      </div>
    </section>
  );
}