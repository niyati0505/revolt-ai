"use client";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-[#071426] pt-32 lg:pt-40">

      {/* Animated Background */}
      <div className="hero-bg" />

      {/* Main Glow */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl items-center justify-between px-8 lg:px-16">

        {/* LEFT SIDE */}

        <div className="max-w-2xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            AI Powered Battery Intelligence
          </p>

          <h1 className="text-6xl font-black leading-tight text-white md:text-7xl lg:text-8xl">
            Know Your
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Battery.
            </span>

            <br />

            Trust Every Journey.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
            ReVolt AI helps EV owners, buyers and dealerships instantly
            evaluate battery health using AI and generate a secure
            Digital Battery Passport.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <button
              onClick={() => router.push("/scan")}
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,.4)]"
            >
              Scan Battery →
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/10">
              Watch Demo
            </button>

          </div>

          {/* Trust Indicators */}

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-400">

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              AI Powered Analysis
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
              QR Verified Passport
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400"></span>
              Secure Reports
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative hidden h-[600px] w-[600px] items-center justify-center lg:flex">

          {/* Background Glow */}
          <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[120px]" />

          {/* Rotating Rings */}
          <div className="outer-ring absolute" />
          <div className="inner-ring absolute" />

          {/* Glass Core */}

          <div className="glass-core">

            <div className="pulse-core" />

            <div className="absolute text-center">

              <div className="mx-auto mb-6 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_35px_#22d3ee]" />

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10">

                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-300 to-blue-600 shadow-[0_0_40px_rgba(34,211,238,.6)]"></div>

              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.5em] text-cyan-300">
                AI CORE ACTIVE
              </p>

            </div>

          </div>

          {/* Floating Cards */}

          <div className="glass-card absolute left-0 top-10">
            <p>Battery Health</p>
            <h3>91%</h3>
          </div>

          <div className="glass-card absolute right-0 top-20">
            <p>AI Grade</p>
            <h3 className="text-green-400">A+</h3>
          </div>

          <div className="glass-card absolute bottom-24 left-6">
            <p>Digital Passport</p>
            <h3>Verified</h3>
          </div>

          <div className="glass-card absolute bottom-12 right-0">
            <p>Battery Life</p>
            <h3>6.8 Years</h3>
          </div>

        </div>

      </div>

    </section>
  );
}