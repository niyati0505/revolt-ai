"use client";

import { useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { batteries } from "@/data/batteries";
import Link from "next/link";

import QRCode from "react-qr-code";

import jsPDF from "jspdf";

import {
  BatteryCharging,
  ShieldCheck,
  Calendar,
  Car,
  Download,
  Share2,
  BrainCircuit,
  ArrowLeft,
  Gauge,
  Thermometer,
  Zap,
  Activity,
  IndianRupee,
  CheckCircle2,
} from "lucide-react";

export default function PassportPage() {
  const params = useParams();
  const router = useRouter();

  const passportRef = useRef<HTMLDivElement>(null);

  const batteryId = params.batteryId as string;

  const battery = batteries.find(
    (b) =>
      b.batteryId.toLowerCase() ===
      batteryId.toLowerCase()
  );

  if (!battery) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#071426] text-white">
        <div className="rounded-3xl border border-red-500/20 bg-white/5 p-10 text-center">

          <h1 className="text-4xl font-bold text-red-400">
            Battery Not Found
          </h1>

          <p className="mt-4 text-slate-400">
            Invalid Battery ID.
          </p>

          <button
            onClick={() => router.push("/scan")}
            className="mt-8 rounded-full bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-400"
          >
            Scan Again
          </button>

        </div>
      </main>
    );
  }

  const downloadPDF = () => {
  const pdf = new jsPDF("p", "mm", "a4");

  // Colors
  const primary = "#0891b2";
  const dark = "#071426";
  const green = "#16a34a";

  // Header
  pdf.setFillColor(7, 20, 38);
  pdf.rect(0, 0, 210, 35, "F");

  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(24);
  pdf.text("REVOLT AI", 15, 18);

  pdf.setFontSize(12);
  pdf.text("AI Verified Digital Battery Passport", 15, 27);

  // Vehicle
  pdf.setTextColor(0, 0, 0);
  pdf.setFontSize(18);
  pdf.setFont("helvetica", "bold");
  pdf.text(battery.vehicle, 15, 50);

  pdf.setFontSize(11);
  pdf.setFont("helvetica", "normal");
  pdf.text(`Manufacturer: ${battery.manufacturer}`, 15, 58);

  // Divider
  pdf.setDrawColor(8, 145, 178);
  pdf.line(15, 64, 195, 64);

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(15);
  pdf.text("Battery Information", 15, 75);

  const details = [
    ["Battery ID", battery.batteryId],
    ["Battery Type", battery.batteryType],
    ["Capacity", battery.batteryCapacity],
    ["Battery Health", `${battery.batteryHealth}%`],
    ["AI Grade", battery.aiGrade],
    ["SOH", battery.soh],
    ["SOC", battery.soc],
    ["Voltage", battery.voltage],
    ["Current", battery.current],
    ["Temperature", battery.temperature],
    ["Charge Cycles", battery.chargeCycles.toString()],
    ["Remaining Life", battery.remainingLife],
    ["Estimated Range", battery.estimatedRange],
    ["Warranty", battery.warrantyStatus],
    ["Warranty Expiry", battery.warrantyExpiry],
  ];

  let y = 85;

  pdf.setFontSize(11);

  details.forEach(([label, value]) => {
    pdf.setFont("helvetica", "bold");
    pdf.text(`${label}:`, 18, y);

    pdf.setFont("helvetica", "normal");
    pdf.text(String(value), 70, y);

    y += 8;
  });

  y += 8;

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(15);
  pdf.text("AI Recommendations", 15, y);

  y += 10;

  battery.recommendations.forEach((item) => {
    pdf.setTextColor(22, 163, 74);
    pdf.text("✓", 18, y);

    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "normal");
    pdf.text(item, 25, y);

    y += 8;
  });

  y += 10;

  // Status box
  pdf.setFillColor(240, 253, 244);
  pdf.roundedRect(15, y, 180, 28, 3, 3, "F");

  pdf.setTextColor(22, 163, 74);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(14);
  pdf.text("AI VERIFIED", 20, y + 11);

  pdf.setTextColor(0, 0, 0);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);
  pdf.text(
    `Generated on: ${new Date().toLocaleDateString()}`,
    20,
    y + 20
  );

  // Footer
  pdf.setFillColor(7, 20, 38);
  pdf.rect(0, 285, 210, 12, "F");

  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(9);
  pdf.text(
    "REVOLT AI • AI Powered Battery Intelligence Platform",
    15,
    292
  );

  pdf.save(`${battery.batteryId}-Battery-Passport.pdf`);
};

  const sharePassport = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Battery Passport",
        text: `${battery.vehicle} Battery Passport`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Passport link copied!");
    }
  };

  return (
    <main className="min-h-screen bg-[#071426] px-8 py-10 text-white">

      <div className="fixed left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="flex items-center justify-between">

          <Link
            href={`/dashboard/${battery.batteryId}`}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            <ArrowLeft size={18} />
            Dashboard
          </Link>

          <h1 className="text-4xl font-bold">
            Digital Battery Passport
          </h1>

          <div />

        </div>

        <div
  ref={passportRef}
  style={{
    backgroundColor: "#071426",
    color: "#ffffff",
    padding: "30px",
  }}
>

          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

            {/* LEFT */}

            <div>

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-4xl font-bold">
                    {battery.vehicle}
                  </h2>

                  <p className="mt-2 text-slate-400">
                    {battery.manufacturer}
                  </p>

                </div>

                <ShieldCheck
                  size={48}
                  className="text-emerald-400"
                />

              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                                <PassportCard
                  icon={<BatteryCharging />}
                  title="Battery Health"
                  value={`${battery.batteryHealth}%`}
                />

                <PassportCard
                  icon={<BrainCircuit />}
                  title="AI Grade"
                  value={battery.aiGrade}
                />

                <PassportCard
                  icon={<Calendar />}
                  title="Last Scan"
                  value={battery.lastScan}
                />

                <PassportCard
                  icon={<Activity />}
                  title="Charge Cycles"
                  value={battery.chargeCycles.toString()}
                />

              </div>

              {/* Battery Details */}

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">

                <h2 className="text-2xl font-bold">
                  Battery Information
                </h2>

                <div className="mt-8 grid gap-6 md:grid-cols-2">

                  <Info title="Battery ID" value={battery.batteryId} />
                  <Info title="QR Code" value={battery.qrCode} />
                  <Info title="Battery Type" value={battery.batteryType} />
                  <Info title="Capacity" value={battery.batteryCapacity} />
                  <Info title="SOH" value={battery.soh} />
                  <Info title="SOC" value={battery.soc} />
                  <Info title="Voltage" value={battery.voltage} />
                  <Info title="Current" value={battery.current} />
                  <Info title="Temperature" value={battery.temperature} />
                  <Info title="Remaining Life" value={battery.remainingLife} />
                  <Info title="Estimated Range" value={battery.estimatedRange} />
                  <Info title="Warranty" value={battery.warrantyStatus} />
                  <Info title="Warranty Expiry" value={battery.warrantyExpiry} />
                  <Info title="Manufacturer" value={battery.manufacturer} />
                  <Info title="Owner" value={battery.owner} />
                  <Info title="Installation Date" value={battery.installationDate} />

                </div>

              </div>

              {/* AI Recommendations */}

              <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">

                <h2 className="text-2xl font-bold">
                  AI Recommendations
                </h2>

                <div className="mt-6 space-y-3">

                  {battery.recommendations.map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl bg-white/5 p-4"
                    >

                      <CheckCircle2 className="text-green-400" />

                      <span>{item}</span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

                <div className="mx-auto rounded-2xl bg-white p-4 w-fit">

                  <QRCode value={battery.batteryId} />

                </div>

                <p className="mt-6 text-slate-400">
                  Scan to verify this Battery Passport
                </p>

                <div className="mt-8 space-y-4">
<button
  onClick={downloadPDF}
  className="flex w-full items-center justify-center gap-3 rounded-full bg-cyan-500 py-4 font-semibold transition hover:bg-cyan-400"
>
  <Download size={20} />
  Download PDF
</button>

                  <button
                    onClick={sharePassport}
                    className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 py-4 font-semibold transition hover:bg-white/10"
                  >

                    <Share2 size={20} />

                    Share Passport

                  </button>

                  <button
  onClick={() => router.push(`/valuation/${battery.batteryId}`)}
  className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 py-4 font-semibold transition hover:scale-105"
>
  <IndianRupee size={20} />
  Estimate Resale Value
</button>

                </div>

              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">

                <h2 className="text-xl font-bold">
                  Battery Status
                </h2>

                <div className="mt-6 space-y-4">

                  <Status label="Health" value={`${battery.batteryHealth}%`} />

                  <Status label="AI Grade" value={battery.aiGrade} />

                  <Status label="SOH" value={battery.soh} />

                  <Status label="SOC" value={battery.soc} />

                  <Status label="Fast Charging" value={battery.fastCharging} />

                  <Status label="Slow Charging" value={battery.slowCharging} />

                  <Status label="Efficiency" value={battery.chargingEfficiency} />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

function PassportCard({
  icon,
  title,
  value,
}:{
  icon:React.ReactNode;
  title:string;
  value:string;
}){

  return(

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

      <div className="text-cyan-400">
        {icon}
      </div>

      <p className="mt-4 text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {value}
      </h3>

    </div>

  )

}

function Info({
  title,
  value,
}:{
  title:string;
  value:string;
}){

  return(

    <div>

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h4 className="mt-1 text-lg font-semibold">
        {value}
      </h4>

    </div>

  )

}

function Status({
  label,
  value,
}:{
  label:string;
  value:string;
}){

  return(

    <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">

      <span className="text-slate-400">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>

    </div>

  )

}
            
              