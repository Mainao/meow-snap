"use client";

import { useState } from "react";
import { LandingActions } from "./LandingActions";
import CatStickerSad from "@/components/sticker/CatStickerSad";
import CatSticker from "@/components/sticker/CatSticker";

interface LandingProps {
    onNext: () => void;
}

export function Landing({ onNext }: LandingProps) {
    const [rejected, setRejected] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center space-y-8 min-h-screen">
            {rejected ? <CatStickerSad /> : <CatSticker />}

            <LandingActions
                rejected={rejected}
                onReject={() => setRejected(true)}
                onAccept={onNext}
            />
        </div>
    );
}
