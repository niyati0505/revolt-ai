"use client";

import { BrainCircuit, Cloud, Database, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function AnalyzingPage() {
  const router = useRouter();
  const params = useParams();

  const batteryId = params.batteryId as string;

  const steps = [
    "Connecting to Cloud...",
    "Fetching Battery Data...",
    "Verifying Battery Identity...",
    "Analyzing Battery Health...",
    "Calculating SOH & Remaining Life...",
    "Generating AI Battery Passport...",
  ];

  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < steps.length - 1) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 800);

      return () => clearTimeout(timer);
    }

    const redirect = setTimeout(() => {
      router.push(`/dashboard/${batteryId}`);
    }, 1200);

    return () => clearTimeout(redirect);
  }, [step, batteryId, router]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#071426] text-white">

      <div className="absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="w-full max-w-2xl rounded-[40px] border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl">

        <div className="flex justify-center">
          <div className="rounded-full bg-cyan-500/20 p-6">
            <BrainCircuit
              size={70}
              className="animate-pulse text-cyan-400"
            />
          </div>
        </div>

        <h1 className="mt-8 text-center text-4xl font-bold">
          AI Battery Analysis
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Battery ID: {batteryId}
        </p>

        <div className="mt-10 h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all duration-700"
            style={{
              width: `${((step + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

        <div className="mt-10 space-y-4">

          {steps.map((item, index) => (

            <div
              key={index}
              className={`flex items-center gap-4 rounded-2xl p-4 transition ${
                index <= step
                  ? "bg-cyan-500/10 border border-cyan-500/30"
                  : "bg-white/5"
              }`}
            >

              {index === 0 && <Cloud className="text-cyan-400" />}
              {index === 1 && <Database className="text-cyan-400" />}
              {index >= 2 && <ShieldCheck className="text-green-400" />}

              <span>{item}</span>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}