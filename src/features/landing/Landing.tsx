"use client";

import { useState } from "react";
import { LandingActions } from "./LandingActions";
import CatSticker from "@/components/ui/CatSticker";

interface LandingProps {
    onNext: () => void;
}

export function Landing({ onNext }: LandingProps) {
    const [rejected, setRejected] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center space-y-8 min-h-dvh">
            {rejected ? <CatSticker variant="sad" /> : <CatSticker />}

            <LandingActions
                rejected={rejected}
                onReject={() => setRejected(true)}
                onAccept={onNext}
            />
        </div>
    );
}
