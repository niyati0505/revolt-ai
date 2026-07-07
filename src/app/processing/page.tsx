import { Suspense } from "react";
import ProcessingContent from "./ProcessingContent";

export default function ProcessingPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#071426] text-white">
          Loading...
        </main>
      }
    >
      <ProcessingContent />
    </Suspense>
  );
}