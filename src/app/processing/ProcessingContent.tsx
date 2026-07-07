"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BrainCircuit } from "lucide-react";

const steps = [
  "Initializing AI Engine...",
  "Reading Battery Data...",
  "Analyzing Battery Health...",
  "Checking Charge Cycles...",
  "Generating Battery Passport...",
  "Preparing Dashboard...",
];

export default function ProcessingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const batteryId = searchParams.get("batteryId");

  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (!batteryId) {
      router.push("/scan");
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            router.push(`/dashboard/${batteryId}`);
          }, 700);

          return 100;
        }

        setStepIndex(
          Math.min(
            Math.floor(next / (100 / steps.length)),
            steps.length - 1
          )
        );

        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [batteryId, router]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#071426]">

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 w-full max-w-xl rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10">
          <BrainCircuit
            size={48}
            className="animate-spin text-cyan-400"
            style={{ animationDuration: "4s" }}
          />
        </div>

        <h1 className="mt-8 text-center text-4xl font-bold text-white">
          AI Analysis in Progress
        </h1>

        <p className="mt-3 text-center text-slate-400">
          {steps[stepIndex]}
        </p>

        <div className="mt-10 h-4 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 flex justify-between text-sm text-slate-400">
          <span>{progress}%</span>
          <span>Processing...</span>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">
            Battery ID
          </p>

          <h3 className="mt-2 text-lg font-semibold text-cyan-300">
            {batteryId}
          </h3>
        </div>

      </div>

    </main>
  );
}