"use client";

import { useCallback, useState } from "react";
import CatSticker from "@/components/sticker/CatSticker";
import Button from "@/components/ui/Button";

interface PermissionProps {
    onNext: () => void;
}

export function CameraPermission({ onNext }: PermissionProps) {
    const [error, setError] = useState<string | null>(null);

    const handleAllowCamera = useCallback(async () => {
        setError(null);

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });

            // Stop stream immediately after permission check
            stream.getTracks().forEach((track) => track.stop());

            onNext();
        } catch (err) {
            console.error(err);
            setError(
                "Oops! I can't see without camera access. Please enable it in browser settings!",
            );
        }
    }, [onNext]);

    return (
        <div className="flex flex-col items-center justify-center space-y-6 text-center min-h-screen">
            <CatSticker />

            <h1 className="text-4xl md:text-5xl font-bold font-handwritten">
                SMILEEEEE
            </h1>

            <p className="cute-text text-2xl md:text-3xl">
                Click allow so I can take your photo!!
            </p>

            <Button onClick={handleAllowCamera}>Allow Camera 📷</Button>

            {error && (
                <p className="text-red-500 mt-4 cute-text text-xl">{error}</p>
            )}
        </div>
    );
}
