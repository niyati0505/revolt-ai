"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { batteries } from "@/data/batteries";
import { marketplaceData } from "@/data/marketplace";
import {
  CheckCircle,
  User,
  MapPin,
  IndianRupee,
} from "lucide-react";

export default function ReserveBatteryPage() {
  const { batteryId } = useParams();

  const battery = batteries.find(
    (b) => b.batteryId === batteryId
  );

  const market = marketplaceData.find(
    (m) => m.batteryId === batteryId
  );

  const [reserved, setReserved] = useState(false);

  if (!battery || !market) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#071426] text-white">
        Battery not found.
      </main>
    );
  }

  const reservationId =
    "RV-RES-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <main className="min-h-screen bg-[#071426] text-white p-8">

      {/* Background Glow */}

      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-5xl">

        <h1 className="text-5xl font-black">
          Reserve Battery
        </h1>

        <p className="mt-3 text-slate-400">
          Reserve this verified battery before it is purchased by another buyer.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Left Card */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-3xl font-bold">
              {battery.vehicle}
            </h2>

            <div className="mt-8 space-y-5">

              <Info
                icon={<User size={20} />}
                title="Seller"
                value={market.seller}
              />

              <Info
                icon={<MapPin size={20} />}
                title="Location"
                value={market.location}
              />

              <Info
                icon={<CheckCircle size={20} />}
                title="Battery Health"
                value={`${battery.batteryHealth}%`}
              />

              <Info
                icon={<IndianRupee size={20} />}
                title="Selling Price"
                value={market.sellingPrice}
              />

              <Info
                icon={<IndianRupee size={20} />}
                title="Reservation Fee"
                value="₹10,000 (Adjustable)"
              />

            </div>

          </div>

          {/* Right Card */}

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">

            <h2 className="text-3xl font-bold">
              Reservation Summary
            </h2>

            <div className="mt-8 space-y-4">

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">
                  Reservation Status
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Available
                </h3>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">
                  Reservation Validity
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  48 Hours
                </h3>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">
                  Payment Method
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Secure Escrow
                </h3>
              </div>

            </div>

            <button
              onClick={() => setReserved(true)}
              className="mt-8 w-full rounded-full bg-cyan-500 py-4 text-lg font-semibold transition hover:bg-cyan-400"
            >
              Confirm Reservation
            </button>

            <Link
              href={`/marketplace/${battery.batteryId}`}
              className="mt-4 block w-full rounded-full border border-white/10 py-4 text-center hover:bg-white/10"
            >
              ← Back to Marketplace
            </Link>

          </div>

        </div>

        {/* SUCCESS CARD */}

        {reserved && (

          <div className="mt-10 rounded-3xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20">

                <CheckCircle
                  size={36}
                  className="text-green-400"
                />

              </div>

              <div>

                <h2 className="text-3xl font-bold text-green-400">
                  Reservation Confirmed
                </h2>

                <p className="text-slate-300">
                  Your battery has been successfully reserved.
                </p>

              </div>

            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <SuccessCard
                title="Reservation ID"
                value={reservationId}
              />

              <SuccessCard
                title="Status"
                value="Reserved"
              />

              <SuccessCard
                title="Reserved Battery"
                value={battery.vehicle}
              />

              <SuccessCard
                title="Reservation Validity"
                value="48 Hours"
              />

            </div>

            <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

              <h3 className="text-xl font-bold text-cyan-400">
                Next Step
              </h3>

              <p className="mt-3 text-slate-300">
                Your reservation is secured. Please complete the inspection
                within the next <b>48 hours</b> to proceed with the purchase.
              </p>

            </div>

            <div className="mt-8 flex gap-4">

              <button
                onClick={() => setReserved(false)}
                className="flex-1 rounded-full border border-white/10 py-4 hover:bg-white/10"
              >
                Close
              </button>

              <Link
                href={`/services/inspection/${battery.batteryId}`}
                className="flex-1 rounded-full bg-cyan-500 py-4 text-center font-semibold hover:bg-cyan-400"
              >
                Continue to Inspection →
              </Link>

            </div>

          </div>

        )}

      </div>

    </main>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-5">

      <div className="text-cyan-400">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-400">
          {title}
        </p>

        <h3 className="text-lg font-semibold">
          {value}
        </h3>
      </div>

    </div>
  );
}

function SuccessCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-5">

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-xl font-semibold">
        {value}
      </h3>

    </div>
  );
}