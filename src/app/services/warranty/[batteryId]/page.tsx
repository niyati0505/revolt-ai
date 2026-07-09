"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { batteries } from "@/data/batteries";
import {
  ShieldCheck,
  User,
  BadgeCheck,
  FileCheck,
} from "lucide-react";

export default function WarrantyPage() {
  const { batteryId } = useParams();

  const battery = batteries.find(
    (b) => b.batteryId === batteryId
  );

  const [transferred, setTransferred] = useState(false);

  if (!battery) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#071426] text-white">
        Battery not found.
      </main>
    );
  }

  const certificateId =
    "RV-WAR-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <main className="min-h-screen bg-[#071426] text-white p-8">

      {/* Background Glow */}

      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-5xl">

        <h1 className="text-5xl font-black">
          Warranty Transfer
        </h1>

        <p className="mt-3 text-slate-400">
          Transfer the remaining warranty to the new battery owner.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-3xl font-bold">
              {battery.vehicle}
            </h2>

            <div className="mt-8 space-y-5">

              <Info
                icon={<User size={20} />}
                title="Current Owner"
                value={battery.owner}
              />

              <Info
                icon={<User size={20} />}
                title="New Owner"
                value="Reserved Buyer"
              />

              <Info
                icon={<ShieldCheck size={20} />}
                title="Warranty Status"
                value={battery.warrantyStatus}
              />

              <Info
                icon={<BadgeCheck size={20} />}
                title="Warranty Expiry"
                value={battery.warrantyExpiry}
              />

              <Info
                icon={<FileCheck size={20} />}
                title="Transfer Fee"
                value="Free"
              />

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">

            <h2 className="text-3xl font-bold">
              Transfer Summary
            </h2>

            <div className="mt-8 space-y-4">

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">
                  Current Status
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Ready for Transfer
                </h3>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">
                  Digital Passport
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Will be Updated Automatically
                </h3>
              </div>

            </div>

            <button
              onClick={() => setTransferred(true)}
              className="mt-10 w-full rounded-full bg-cyan-500 py-4 text-lg font-semibold transition hover:bg-cyan-400"
            >
              Transfer Warranty
            </button>

            {transferred && (

              <div className="mt-8 rounded-3xl border border-green-500/30 bg-green-500/10 p-6">

                <h2 className="text-2xl font-bold text-green-400">
                  ✅ Warranty Successfully Transferred
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">
                      Certificate ID
                    </p>

                    <h3 className="text-lg font-semibold">
                      {certificateId}
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">
                      Status
                    </p>

                    <h3 className="text-lg font-semibold text-green-400">
                      Transfer Complete
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">
                      Battery Passport
                    </p>

                    <h3 className="text-lg font-semibold">
                      Updated Successfully
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">
                      Ownership
                    </p>

                    <h3 className="text-lg font-semibold">
                      Assigned to New Owner
                    </h3>
                  </div>

                </div>

                <div className="mt-6 rounded-2xl bg-white/5 p-5">

                  <h3 className="text-xl font-bold">
                    Service Journey Completed 🎉
                  </h3>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm">

                    <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                      ✓ Reserved
                    </span>

                    <span>→</span>

                    <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                      ✓ Inspection
                    </span>

                    <span>→</span>

                    <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                      ✓ Delivery
                    </span>

                    <span>→</span>

                    <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-400">
                      ✓ Warranty
                    </span>

                  </div>

                </div>

              </div>

            )}

            <Link
              href={`/marketplace/${battery.batteryId}`}
              className="mt-6 block rounded-full border border-white/10 py-4 text-center hover:bg-white/10"
            >
              ← Back to Marketplace
            </Link>

          </div>

        </div>

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