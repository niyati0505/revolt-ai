"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { batteries } from "@/data/batteries";
import Link from "next/link";
export default function InspectionPage() {

const { batteryId } = useParams();

const battery = batteries.find(
b=>b.batteryId===batteryId
);

const [booked,setBooked]=useState(false);

return(

<main className="min-h-screen bg-[#071426] text-white flex justify-center items-center p-8">

<div className="w-full max-w-4xl rounded-3xl bg-white/5 border border-white/10 p-10">

<h1 className="text-4xl font-bold">
Book Inspection
</h1>

<p className="mt-2 text-slate-400">
{battery?.vehicle}
</p>

<div className="mt-10 grid gap-5 md:grid-cols-2">

<div className="rounded-2xl bg-white/5 p-5">
<h3 className="font-semibold">Inspection Center</h3>
<p>REVOLT Certified EV Center</p>
</div>

<div className="rounded-2xl bg-white/5 p-5">
<h3 className="font-semibold">Inspector</h3>
<p>Rahul Mehta</p>
</div>

<div className="rounded-2xl bg-white/5 p-5">
<h3 className="font-semibold">Available Date</h3>
<p>12 July 2026</p>
</div>

<div className="rounded-2xl bg-white/5 p-5">
<h3 className="font-semibold">Time Slot</h3>
<p>11:00 AM</p>
</div>

</div>

<button
onClick={()=>setBooked(true)}
className="mt-10 w-full rounded-full bg-cyan-500 py-4 font-semibold"
>

Confirm Inspection

</button>

{booked && (

<div className="mt-8 rounded-3xl bg-green-500/10 border border-green-500/30 p-6">

<h2 className="text-2xl font-bold text-green-400">

✅ Inspection Scheduled

</h2>

<p className="mt-4">

Inspection ID:
INS-2026-5421

</p>

<p>

Status:
Scheduled

</p>

<p>

Inspector:
Rahul Mehta

</p>

<p>

Next Step:
Schedule Delivery

</p>

</div>

)}

<Link
href={`/marketplace/${batteryId}`}
className="block mt-6 text-center text-cyan-400"
>

← Back

</Link>

</div>

</main>

);

}