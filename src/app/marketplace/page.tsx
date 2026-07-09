import Link from "next/link";
import { batteries } from "@/data/batteries";
import { marketplaceData } from "@/data/marketplace";

export default function Marketplace() {
  const listings = batteries.map((battery) => {
    const market = marketplaceData.find(
      (m) => m.batteryId === battery.batteryId
    );

    return {
      ...battery,
      ...market,
    };
  });

  return (
    <main className="min-h-screen bg-[#071426] text-white px-8 py-12">

      {/* Background Glow */}

      <div className="fixed left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Hero */}

      <div className="mx-auto max-w-7xl">

        <h1 className="text-5xl font-black">
          REVOLT AI Battery Exchange
        </h1>

        <p className="mt-4 text-slate-400 text-lg">
          Browse AI Verified batteries from trusted sellers across India.
        </p>

      </div>

      {/* Listings */}

      <div className="mx-auto mt-12 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">

        {listings.map((battery) => (

          <div
            key={battery.batteryId}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400"
          >

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-bold">
                {battery.vehicle}
              </h2>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
                VERIFIED
              </span>

            </div>

            <p className="mt-2 text-slate-400">
              {battery.seller}
            </p>

            <p className="text-sm text-cyan-400">
              ⭐ {battery.sellerRating} • {battery.location}
            </p>

            <div className="mt-8 space-y-3">

              <div className="flex justify-between">
                <span>Battery Health</span>
                <span>{battery.batteryHealth}%</span>
              </div>

              <div className="flex justify-between">
                <span>AI Grade</span>
                <span>{battery.aiGrade}</span>
              </div>

              <div className="flex justify-between">
                <span>Market Score</span>
                <span>{battery.marketScore}/100</span>
              </div>

              <div className="flex justify-between">
                <span>Buyer Interest</span>
                <span>{battery.buyerInterest}</span>
              </div>

            </div>

            <div className="mt-8 rounded-2xl bg-cyan-500/10 p-5">

              <p className="text-sm text-slate-400">
                Selling Price
              </p>

              <h2 className="mt-2 text-4xl font-black text-green-400">
                {battery.sellingPrice}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                AI Value: {battery.estimatedValue}
              </p>

            </div>

            <div className="mt-8 flex gap-3">

              <Link
                href={`/passport/${battery.batteryId}`}
                className="flex-1 rounded-full border border-white/10 py-3 text-center transition hover:bg-white/10"
              >
                Passport
              </Link>

              <Link
                href={`/marketplace/${battery.batteryId}`}
                className="flex-1 rounded-full bg-cyan-500 py-3 text-center font-semibold transition hover:bg-cyan-400"
              >
                View
              </Link>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}