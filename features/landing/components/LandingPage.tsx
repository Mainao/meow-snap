"use client";

import { useState } from "react";
import CatMascot from "@/components/mascot/CatMascot";
import CatMascotSad from "@/components/mascot/CatMascotSad";
import { LandingActions } from "./LandingActions";

export function LandingPage() {
  const [rejected, setRejected] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 min-h-screen">
      {rejected ? <CatMascotSad /> : <CatMascot />}
      <LandingActions rejected={rejected} onReject={() => setRejected(true)} onAccept={() => setRejected(false)} />
    </div>
  );
}