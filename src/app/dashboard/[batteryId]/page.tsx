import { batteries } from "@/data/batteries";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  BatteryCharging,
  BrainCircuit,
  ShieldCheck,
  Thermometer,
  Activity,
  ArrowRight,
  Car,
  Gauge,
  Calendar,
  Zap,
} from "lucide-react";

export default async function Dashboard({
  params,
}: {
  params: Promise<{ batteryId: string }>;
}) 
{
  // Next.js 16
  const { batteryId } = await params;

  const battery = batteries.find(
    (b) =>
      b.batteryId.trim().toLowerCase() ===
      batteryId.trim().toLowerCase()
  );

  if (!battery) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#071426] text-white">
        <div className="rounded-3xl border border-red-500/20 bg-white/5 p-10 text-center">
          <h1 className="text-4xl font-bold text-red-400">
            Battery Not Found
          </h1>

          <p className="mt-4 text-slate-400">
            The Battery ID you entered doesn't exist.
          </p>

          <Link
            href="/scan"
            className="mt-8 inline-block rounded-full bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-400"
          >
            Scan Again
          </Link>
        </div>
      </main>
    );
  }

  return(
    <main className="min-h-screen bg-[#071426] px-8 py-10 text-white">

      {/* Background Glow */}

      <div className="fixed left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Header */}

      <div className="mx-auto flex max-w-7xl items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            AI Battery Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            {battery.vehicle}
          </p>
        </div>

        <Link
          href={`/passport/${battery.batteryId}`}
          className="rounded-full bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-400"
        >
          View Passport
        </Link>

      </div>

      {/* Main Grid */}

      <div className="mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-3">

        {/* LEFT */}

        <div className="space-y-8 lg:col-span-2">

          {/* Health Card */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-bold">
                Battery Health
              </h2>

              <BatteryCharging
                className="text-cyan-400"
                size={32}
              />

            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-10 lg:flex-row">

              {/* Circular Gauge */}

              <div className="relative flex h-64 w-64 items-center justify-center">

                <svg
                  className="absolute h-64 w-64 -rotate-90"
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
                    strokeDasharray="628"
                    strokeDashoffset={
                      628 - (628 * battery.batteryHealth) / 100
                    }
                    strokeLinecap="round"
                  />

                </svg>

                <div className="text-center">

                  <h2 className="text-6xl font-black">
                    {battery.batteryHealth}%
                  </h2>

                  <p className="mt-2 text-slate-400">
                    {battery.batteryStatus}
                  </p>

                </div>

              </div>

              {/* Quick Stats */}

              <div className="grid gap-5">

                <div className="flex items-center gap-3">
                  <BrainCircuit className="text-cyan-400" />
                  <span>
                    AI Grade: <b>{battery.aiGrade}</b>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Gauge className="text-green-400" />
                  <span>
                    Health Score: {battery.healthScore}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Thermometer className="text-orange-400" />
                  <span>
                    Temperature: {battery.temperature}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Activity className="text-blue-400" />
                  <span>
                    Charge Cycles: {battery.chargeCycles}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-400" />
                  <span>
                    Warranty: {battery.warrantyStatus}
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* Vehicle Details */}

          <div className="grid gap-6 md:grid-cols-2">

            <InfoCard
              icon={<Car />}
              title="Vehicle"
              value={battery.vehicle}
            />

            <InfoCard
              icon={<BatteryCharging />}
              title="Battery Capacity"
              value={battery.batteryCapacity}
            />

            <InfoCard
              icon={<Calendar />}
              title="Manufacture Date"
              value={battery.manufactureDate}
            />

            <InfoCard
              icon={<Zap />}
              title="Estimated Range"
              value={battery.estimatedRange}
            />

          </div>
          </div>
                  {/* RIGHT SIDEBAR */}

          <div className="space-y-6">

          <Stat
            title="Remaining Life"
            value={battery.remainingLife}
          />

          <Stat
            title="State of Health (SOH)"
            value={battery.soh}
          />

          <Stat
            title="State of Charge (SOC)"
            value={battery.soc}
          />

          <Stat
            title="Battery Voltage"
            value={battery.voltage}
          />

          <Stat
            title="Battery Current"
            value={battery.current}
          />

          <Stat
            title="Fast Charging Usage"
            value={battery.fastCharging}
          />

          <Stat
            title="Slow Charging Usage"
            value={battery.slowCharging}
          />

          <Stat
            title="Charging Efficiency"
            value={battery.chargingEfficiency}
          />

          <Stat
            title="Energy Efficiency"
            value={battery.energyEfficiency}
          />

          {/* AI Recommendation */}

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6 backdrop-blur-xl">

            <h2 className="text-xl font-bold">
              🤖 AI Recommendations
            </h2>

            <ul className="mt-5 space-y-3">

              {battery.recommendations.map((item, index) => (
                <li
                  key={index}
                  className="rounded-xl bg-white/5 p-3 text-slate-300"
                >
                  ✅ {item}
                </li>
              ))}

            </ul>

            <Link
              href={`/passport/${battery.batteryId}`}
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-cyan-500 py-4 font-semibold transition hover:bg-cyan-400"
            >
              View Battery Passport

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}

/* -------------------- COMPONENTS -------------------- */

function Stat({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/30 hover:-translate-y-1">

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-white">
        {value}
      </h3>

    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/30 hover:-translate-y-1">

      <div className="text-cyan-400">
        {icon}
      </div>

      <p className="mt-4 text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-xl font-semibold text-white">
        {value}
      </h3>

    </div>
  );
}