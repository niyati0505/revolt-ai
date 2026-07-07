import {
  BatteryCharging,
  Brain,
  ShieldCheck,
  Activity,
  TrendingUp,
  Thermometer,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="bg-[#071426] py-32">
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            DASHBOARD
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Smart Battery Dashboard
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            View your battery health, AI insights and performance analytics in
            one intelligent dashboard.
          </p>
        </div>

        {/* Dashboard */}

        <div className="mt-20 rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl shadow-[0_0_80px_rgba(34,211,238,.08)] transition-all duration-500 hover:shadow-[0_0_120px_rgba(34,211,238,.18)]">

          {/* Header */}

          <div className="flex items-center justify-between border-b border-white/10 pb-6">

            <div>
              <h3 className="text-2xl font-bold text-white">
                ReVolt AI Dashboard
              </h3>

              <p className="mt-2 text-slate-400">
                Tesla Model 3 • Last Scan Today
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2">

              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>

              <span className="text-sm font-semibold text-emerald-400">
                LIVE
              </span>

            </div>

          </div>

          {/* Main */}

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">

            {/* Left Side */}

            <div>

              {/* Battery Ring + Stats */}

              <div className="flex flex-col gap-10 lg:flex-row lg:items-center">

                {/* Progress Ring */}

                <div className="relative flex h-60 w-60 items-center justify-center">

                  <svg
                    className="absolute h-60 w-60 -rotate-90"
                    viewBox="0 0 240 240"
                  >
                    <circle
                      cx="120"
                      cy="120"
                      r="100"
                      stroke="rgba(255,255,255,.08)"
                      strokeWidth="12"
                      fill="none"
                    />

                    <circle
                      cx="120"
                      cy="120"
                      r="100"
                      stroke="#22d3ee"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="628"
                      strokeDashoffset="56"
                    />
                  </svg>

                  <div className="text-center">
                    <h2 className="text-6xl font-black text-white">
                      91%
                    </h2>

                    <p className="mt-2 text-slate-400">
                      Battery Health
                    </p>
                  </div>

                </div>

                {/* Stats */}

                <div className="space-y-5">

                  <div className="flex items-center gap-3">
                    <Brain className="text-cyan-400" />
                    <span className="text-white">
                      AI Grade : <strong>A+</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <BatteryCharging className="text-green-400" />
                    <span className="text-white">
                      Remaining Life : <strong>6.8 Years</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-blue-400" />
                    <span className="text-white">
                      QR Verified
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Thermometer className="text-orange-400" />
                    <span className="text-white">
                      Temperature : <strong>32°C</strong>
                    </span>
                  </div>

                </div>

              </div>

              {/* Graph */}

              <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8">

                <div className="flex items-center gap-3">

                  <TrendingUp className="text-cyan-400" />

                  <h4 className="text-xl font-semibold text-white">
                    Battery Health Trend
                  </h4>

                </div>

                <svg
                  viewBox="0 0 600 220"
                  className="mt-8 h-52 w-full"
                >

                  <defs>

                    <linearGradient
                      id="lineGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>

                    <linearGradient
                      id="fillGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#22d3ee55" />
                      <stop offset="100%" stopColor="#22d3ee00" />
                    </linearGradient>

                  </defs>

                  <path
                    d="M20 170
                       C100 150,
                       150 120,
                       220 135
                       S330 90,
                       420 110
                       S520 70,
                       580 60
                       L580 220
                       L20 220 Z"
                    fill="url(#fillGradient)"
                  />

                  <path
                    d="M20 170
                       C100 150,
                       150 120,
                       220 135
                       S330 90,
                       420 110
                       S520 70,
                       580 60"
                    stroke="url(#lineGradient)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />

                </svg>

              </div>

            </div>

            {/* Right Side */}

            <div className="grid gap-6">

              {[
                {
                  title: "Charge Cycles",
                  value: "624",
                  icon: Activity,
                },
                {
                  title: "Fast Charging",
                  value: "18%",
                  icon: BatteryCharging,
                },
                {
                  title: "Health Score",
                  value: "98 / 100",
                  icon: Brain,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-slate-400">
                          {item.title}
                        </p>

                        <h3 className="mt-2 text-4xl font-bold text-white">
                          {item.value}
                        </h3>
                      </div>

                      <div className="rounded-2xl bg-cyan-500/10 p-4">

                        <Icon
                          className="text-cyan-400"
                          size={30}
                        />

                      </div>

                    </div>
                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}