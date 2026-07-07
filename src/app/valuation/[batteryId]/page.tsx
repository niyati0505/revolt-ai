"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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

      <div className="w-full max-w-3xl rounded-[40px] border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl">

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

            <div className="mt-10 h-3 rounded-full bg-white/10 overflow-hidden">

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
                      ? "bg-cyan-500/10 border border-cyan-500/30"
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

              <p className="mt-6 text-slate-400">
                Estimated Market Value
              </p>

              <h2 className="mt-2 text-6xl font-bold text-green-400">
                ₹4,92,000
              </h2>

            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">

              <Card
                icon={<TrendingUp />}
                title="Price Range"
                value="₹4.7L - ₹5.2L"
              />

              <Card
                icon={<BadgeCheck />}
                title="Confidence"
                value="96%"
              />

              <Card
                icon={<BrainCircuit />}
                title="Demand"
                value="High"
              />

            </div>

            <div className="mt-10 rounded-3xl bg-white/5 p-6">

              <h2 className="text-2xl font-bold">
                AI Reasoning
              </h2>

              <ul className="mt-5 space-y-3 text-slate-300">
                <li>✔ Premium Battery Brand</li>
                <li>✔ Excellent State of Health</li>
                <li>✔ Low Charge Cycles</li>
                <li>✔ Active Warranty</li>
                <li>✔ High Market Demand</li>
              </ul>

            </div>

            <button
              onClick={() => router.back()}
              className="mt-8 w-full rounded-full bg-cyan-500 py-4 font-semibold hover:bg-cyan-400"
            >
              Back to Passport
            </button>

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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
      <div className="flex justify-center text-cyan-400">
        {icon}
      </div>

      <p className="mt-3 text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {value}
      </h3>
    </div>
  );
}