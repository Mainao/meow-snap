"use client";

import { useState, useCallback } from "react";
import { useCamera } from "../hooks/useCamera";
import CountdownOverlay from "./CountdownOverlay";
import { PolaroidFrame } from "@/components/ui/PolaroidFrame";
import FlipCameraIcon from "@/components/icons/FlipCameraIcon";
import Button from "@/components/ui/Button";

interface CameraViewProps {
    onPhotoCaptured: (photo: string) => void;
}

export function CameraView({ onPhotoCaptured }: CameraViewProps) {
    const { videoRef, takePhoto, flipCamera, error } = useCamera();

    const [isCountingDown, setIsCountingDown] = useState(false);

    const handleCapture = useCallback(() => {
        setIsCountingDown(true);
    }, []);

    const handleCountdownFinish = useCallback(() => {
        const photo = takePhoto();

        if (!photo) {
            setIsCountingDown(false);
            return;
        }

        onPhotoCaptured(photo);
        setIsCountingDown(false);
    }, [takePhoto, onPhotoCaptured]);

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative w-full max-w-md flex flex-col items-center">
                {isCountingDown && (
                    <CountdownOverlay onFinish={handleCountdownFinish} />
                )}

                <p className="cute-text text-2xl absolute -top-8 z-20 bg-brand-pink px-2 py-1 rounded-md">
                    smile for the camera!
                </p>

                <PolaroidFrame>
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover scale-x-[-1]"
                    />
                </PolaroidFrame>

                {error && (
                    <p className="text-red-500 mt-4 font-handwritten">
                        {error}
                    </p>
                )}

                <div className="mt-8 flex items-center gap-4">
                    <button
                        onClick={flipCamera}
                        aria-label="Flip camera"
                        className="p-3 rounded-full bg-white border-2 border-black shadow-md hover:scale-110 active:scale-95 transition-transform"
                    >
                        <FlipCameraIcon className="w-6 h-6" />
                    </button>

                    <Button onClick={handleCapture} disabled={isCountingDown}>
                        Take Photo 📸
                    </Button>
                </div>
            </div>
        </div>
    );
}
