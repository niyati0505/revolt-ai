"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { batteries } from "@/data/batteries";

import {
  BrainCircuit,
  IndianRupee,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

export default function ValuationPage() {
  const router = useRouter();
  const params = useParams();

  const batteryId = params.batteryId as string;

  const battery = batteries.find(
    (b) => b.batteryId === batteryId
  );

  if (!battery) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#071426] text-white">
        Battery not found.
      </main>
    );
  }

  // ---------------------------
  // AI Valuation Algorithm
  // ---------------------------

  const basePrice: Record<string, number> = {
    "Tesla Model S": 760000,
    "Tesla Model Y": 620000,
    "Tesla Model 3": 500000,
    "Mahindra BE 6": 340000,
    "Fleet Taxi EV": 90000,
    "Tata Nexon EV": 250000,
    "MG ZS EV": 310000,
    "MG4 EV": 430000,
    "BYD Atto 3": 520000,
    "Mahindra XUV400": 290000,
    "Hyundai Ioniq 5": 580000,
    "Citroen eC3": 220000,
    "Hyundai Kona Electric": 330000,
    "MG Windsor EV": 470000,
  };

  let value = basePrice[battery.vehicle] ?? 300000;

  // Battery Health
  value *= battery.batteryHealth / 100;

  // SOH
  value *= Number(battery.soh.replace("%", "")) / 100;

  // Charge Cycles
  value -= battery.chargeCycles * 35;

  // Warranty Bonus
  if (battery.warrantyStatus === "Active") {
    value += 25000;
  }

  if (battery.warrantyStatus === "Expiring Soon") {
    value += 10000;
  }

  // AI Grade Bonus

  switch (battery.aiGrade) {
    case "A+":
      value += 35000;
      break;

    case "A":
      value += 22000;
      break;

    case "B+":
      value += 12000;
      break;

    case "B":
      value += 5000;
      break;

    case "D":
      value -= 30000;
      break;
  }

  // Remaining Life Bonus

  const years = parseFloat(battery.remainingLife);

  if (years >= 8) {
    value += 25000;
  } else if (years >= 6) {
    value += 15000;
  } else if (years <= 2) {
    value -= 25000;
  }

  value = Math.max(value, 50000);

  const estimatedValue =
    "₹" + Math.round(value).toLocaleString("en-IN");

  const minPrice =
    "₹" + Math.round(value * 0.95).toLocaleString("en-IN");

  const maxPrice =
    "₹" + Math.round(value * 1.05).toLocaleString("en-IN");

  const demand =
    battery.batteryHealth >= 95
      ? "Very High"
      : battery.batteryHealth >= 85
      ? "High"
      : battery.batteryHealth >= 75
      ? "Medium"
      : "Low";

  const steps = [
    "Reading Battery Passport...",
    "Checking Battery Health...",
    "Comparing Market Demand...",
    "Evaluating Brand Value...",
    "Calculating AI Resale Value...",
  ];

  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (step < steps.length - 1) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 900);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setFinished(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [step]);
    return (
    <main className="min-h-screen bg-[#071426] text-white flex items-center justify-center p-8">

      <div className="w-full max-w-4xl rounded-[40px] border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl">

        {!finished ? (

          <>
            <div className="flex justify-center">
              <BrainCircuit
                size={70}
                className="animate-pulse text-cyan-400"
              />
            </div>

            <h1 className="mt-6 text-center text-4xl font-bold">
              AI Battery Valuation
            </h1>

            <p className="mt-3 text-center text-slate-400">
              Battery ID: {batteryId}
            </p>

            <div className="mt-10 h-3 overflow-hidden rounded-full bg-white/10">

              <div
                className="h-full bg-cyan-400 transition-all duration-700"
                style={{
                  width: `${((step + 1) / steps.length) * 100}%`,
                }}
              />

            </div>

            <div className="mt-8 space-y-4">

              {steps.map((item, index) => (

                <div
                  key={index}
                  className={`rounded-xl p-4 ${
                    index <= step
                      ? "border border-cyan-500/30 bg-cyan-500/10"
                      : "bg-white/5"
                  }`}
                >
                  {item}
                </div>

              ))}

            </div>

          </>

        ) : (

          <>

            <div className="text-center">

              <IndianRupee
                size={70}
                className="mx-auto text-green-400"
              />

              <h1 className="mt-5 text-4xl font-bold">
                AI Valuation Report
              </h1>

              <p className="mt-4 text-slate-400">
                {battery.vehicle}
              </p>

              <p className="mt-2 text-slate-500">
                Estimated Market Value
              </p>

              <h2 className="mt-4 text-6xl font-bold text-green-400">
                {estimatedValue}
              </h2>

            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              <Card
                icon={<TrendingUp />}
                title="Price Range"
                value={`${minPrice} - ${maxPrice}`}
              />

              <Card
                icon={<BadgeCheck />}
                title="Confidence"
                value={`${battery.healthScore}%`}
              />

              <Card
                icon={<BrainCircuit />}
                title="Market Demand"
                value={demand}
              />

            </div>
                        {/* AI Factors */}

            <div className="mt-10 rounded-3xl bg-white/5 p-6">

              <h2 className="text-2xl font-bold">
                Factors Considered by AI
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">

                <Card
                  icon={<BrainCircuit />}
                  title="Battery Health"
                  value={`${battery.batteryHealth}%`}
                />

                <Card
                  icon={<TrendingUp />}
                  title="State of Health"
                  value={battery.soh}
                />

                <Card
                  icon={<BadgeCheck />}
                  title="Charge Cycles"
                  value={battery.chargeCycles.toString()}
                />

                <Card
                  icon={<IndianRupee />}
                  title="Warranty"
                  value={battery.warrantyStatus}
                />

              </div>

            </div>

            {/* AI Reasoning */}

            <div className="mt-10 rounded-3xl bg-white/5 p-6">

              <h2 className="text-2xl font-bold">
                AI Reasoning
              </h2>

              <ul className="mt-6 space-y-3 text-slate-300">

                <li>✔ Manufacturer: {battery.manufacturer}</li>

                <li>✔ Battery Health: {battery.batteryHealth}%</li>

                <li>✔ State of Health: {battery.soh}</li>

                <li>✔ Charge Cycles: {battery.chargeCycles}</li>

                <li>✔ Remaining Life: {battery.remainingLife}</li>

                <li>✔ Warranty Status: {battery.warrantyStatus}</li>

                <li>✔ AI Grade: {battery.aiGrade}</li>

                <li>
                  ✔ Estimated resale value calculated using battery condition,
                  warranty, charging history and market demand.
                </li>

              </ul>

            </div>

            {/* Buttons */}

            <div className="mt-10 grid gap-4 md:grid-cols-2">

              <button
                onClick={() =>
                  router.push(`/marketplace/${battery.batteryId}`)
                }
                className="rounded-full bg-green-500 py-4 text-lg font-semibold transition hover:bg-green-400"
              >
                Explore Marketplace
              </button>

              <button
                onClick={() => router.back()}
                className="rounded-full bg-cyan-500 py-4 text-lg font-semibold transition hover:bg-cyan-400"
              >
                Back to Passport
              </button>

            </div>

          </>
        )}
      </div>
    </main>
  );
}

function Card({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400 hover:bg-white/10">

      <div className="flex justify-center text-cyan-400">
        {icon}
      </div>

      <p className="mt-3 text-center text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-center text-2xl font-bold">
        {value}
      </h3>

    </div>
  );
}