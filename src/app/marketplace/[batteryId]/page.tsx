import { batteries } from "@/data/batteries";
import { marketplaceData } from "@/data/marketplace";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function MarketplaceDetails({
  params,
}: {
  params: Promise<{ batteryId: string }>;
}) {

  const { batteryId } = await params;

  const battery = batteries.find(
    (b) => b.batteryId === batteryId
  );

  const market = marketplaceData.find(
    (m) => m.batteryId === batteryId
  );

  if (!battery || !market) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#071426] text-white px-8 py-10">

      {/* Glow */}

      <div className="fixed left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-black">
              {battery.vehicle}
            </h1>

            <p className="mt-3 text-slate-400">
              Sold by {market.seller}
            </p>

          </div>

          <Link
            href={`/passport/${battery.batteryId}`}
            className="rounded-full bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-400"
          >
            View Passport
          </Link>

        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">

{/* LEFT */}

<div className="space-y-8">

<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

<h2 className="text-3xl font-bold">
Marketplace Details
</h2>

<div className="mt-8 grid gap-6 md:grid-cols-2">

<Info title="Seller" value={market.seller} />
<Info title="Seller Rating" value={`⭐ ${market.sellerRating}`} />
<Info title="Location" value={market.location} />
<Info title="Condition" value={market.condition} />
<Info title="Market Score" value={`${market.marketScore}/100`} />
<Info title="Buyer Interest" value={market.buyerInterest} />
<Info title="Views" value={market.views.toString()} />
<Info title="Interested Buyers" value={market.interestedBuyers.toString()} />
<Info title="Inspection" value={market.inspectionStatus} />
<Info title="Delivery Time" value={market.deliveryTime} />

</div>

</div>

<div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">

<h2 className="text-2xl font-bold">
AI Market Recommendation
</h2>

<p className="mt-5 text-lg text-slate-300">
{market.marketRecommendation}
</p>

</div>

</div>

<div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

<p className="text-slate-400">
Selling Price
</p>

<h2 className="mt-3 text-5xl font-black text-green-400">
{market.sellingPrice}
</h2>

<p className="mt-3 text-slate-400">
AI Estimated Value
</p>

<h3 className="text-2xl font-bold">
{market.estimatedValue}
</h3>

<div className="mt-10 space-y-4">

<div className="mt-10 flex flex-col gap-4">

  <Link
    href={`/services/reserve/${battery.batteryId}`}
    className="w-full rounded-full bg-cyan-500 py-4 text-center text-lg font-semibold transition hover:bg-cyan-400"
  >
    Reserve Battery
  </Link>

  <Link
    href={`/services/inspection/${battery.batteryId}`}
    className="w-full rounded-full bg-cyan-500 py-4 text-center text-lg font-semibold transition hover:bg-cyan-400"
  >
    Book Inspection
  </Link>

  <Link
    href={`/services/delivery/${battery.batteryId}`}
    className="w-full rounded-full bg-cyan-500 py-4 text-center text-lg font-semibold transition hover:bg-cyan-400"
  >
    Schedule Delivery
  </Link>

  <Link
    href={`/services/warranty/${battery.batteryId}`}
    className="w-full rounded-full bg-cyan-500 py-4 text-center text-lg font-semibold transition hover:bg-cyan-400"
  >
    Transfer Warranty
  </Link>

</div>
</div>

</div>

</div>

</div>
      </div>

    </main>
  );
}

function Info({
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