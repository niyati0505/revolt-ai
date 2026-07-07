"use client";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { batteries } from "@/data/batteries";
import { Search, ScanLine, Car } from "lucide-react";

export default function ScanPage() {
  const router = useRouter();
  const [showScanner, setShowScanner] = useState(false);

  const [batteryId, setBatteryId] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    const battery = batteries.find(
      (b) =>
        b.batteryId.toLowerCase() === batteryId.trim().toLowerCase()
    );

    if (!battery) {
      setError("Battery ID not found.");
      return;
    }

    setError("");

    router.push(`/processing?batteryId=${battery.batteryId}`);
  };

  return (
    <main className="min-h-screen bg-[#071426] text-white px-6 py-12">

      {/* Background Glow */}

      <div className="fixed left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="mx-auto max-w-5xl">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm">
            REVOLT AI
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Scan Your EV Battery
          </h1>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Enter the Battery ID, Serial Number or scan the QR code
            attached to your EV battery.
          </p>

        </div>

        {/* Search Box */}

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <label className="text-slate-300">
            Battery ID
          </label>

          <div className="mt-4 flex gap-4">

            <input
              value={batteryId}
              onChange={(e) => setBatteryId(e.target.value)}
              placeholder="Example : RV-TM3-2026-001245"
              className="flex-1 rounded-2xl border border-white/10 bg-[#0f1d31] p-4 text-white outline-none focus:border-cyan-400"
            />

            <button
              onClick={handleSearch}
              className="rounded-2xl bg-cyan-500 px-8 font-semibold transition hover:bg-cyan-400"
            >
              <Search />
            </button>

          </div>

          {error && (
            <p className="mt-3 text-red-400">
              {error}
            </p>
          )}

        </div>

        {/* OR */}

        <div className="my-10 text-center text-slate-500">
          OR
        </div>

        {/* QR Scan */}

<button
  onClick={() => setShowScanner(true)}
  className="w-full rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 transition hover:border-cyan-400 hover:bg-cyan-500/10"
>
  <ScanLine
    size={60}
    className="mx-auto text-cyan-400"
  />

  <h2 className="mt-5 text-2xl font-bold">
    Scan QR Code
  </h2>

  <p className="mt-2 text-slate-400">
    Click to open camera and scan battery QR
  </p>
</button>


        {/* Demo Batteries */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold">
            Demo Batteries
          </h2>

          <p className="mt-3 text-slate-400">
            Select any demo battery to preview the AI dashboard.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {batteries.map((battery) => (

              <div
                key={battery.batteryId}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400 hover:-translate-y-1"
              >

                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-cyan-500/10 p-4">

                    <Car className="text-cyan-400" />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      {battery.vehicle}
                    </h3>

                    <p className="text-slate-400">
                      {battery.manufacturer}
                    </p>

                  </div>

                </div>

                <div className="mt-6 space-y-2 text-sm">

                  <p>
                    <span className="text-slate-400">
                      Battery ID:
                    </span>{" "}
                    {battery.batteryId}
                  </p>

                  <p>
                    <span className="text-slate-400">
                      Health:
                    </span>{" "}
                    {battery.batteryHealth}%
                  </p>

                  <p>
                    <span className="text-slate-400">
                      AI Grade:
                    </span>{" "}
                    {battery.aiGrade}
                  </p>

                </div>

                <button
                  onClick={() => router.push(`/analyzing/${battery.batteryId}`)}
                  className="mt-6 w-full rounded-xl bg-cyan-500 py-3 font-semibold transition hover:bg-cyan-400"
                >
                  Use Demo
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>
      {showScanner && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">

    <div className="relative w-full max-w-md rounded-3xl bg-[#071426] p-5">

      <button
        onClick={() => setShowScanner(false)}
        className="absolute right-4 top-4 text-2xl text-white"
      >
        ✕
      </button>

      <h2 className="mb-4 text-center text-2xl font-bold text-white">
        Scan Battery QR
      </h2>

      <Scanner
  constraints={{
    facingMode: "environment",
  }}
  onScan={(result) => {
  if (!result.length) return;

  let batteryId = result[0].rawValue.trim();

  // If the QR contains a full URL, extract only the Battery ID
  if (batteryId.startsWith("http")) {
    batteryId = batteryId.split("/").pop() || "";
  }

  router.push(`/analyzing/${batteryId}`);
}}
/>

    </div>

  </div>
)}

    </main>
  );
}