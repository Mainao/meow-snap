"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PolaroidFrame } from "@/components/ui/PolaroidFrame";
import Button from "@/components/ui/Button";

interface PhotoPreviewProps {
    photo: string;
    onNext: () => void;
    onRetake: () => void;
}

export function PhotoPreview({ photo, onNext, onRetake }: PhotoPreviewProps) {
    const [isDeveloped, setIsDeveloped] = useState(false);

    // Simulate polaroid developing effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDeveloped(true);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center space-y-4 min-h-[100dvh] p-4">
            <PolaroidFrame>
                <div className="relative w-full h-full">
                    <Image
                        src={photo}
                        alt="Captured photo preview"
                        fill
                        unoptimized
                        className={`object-cover transition-all duration-700 ${
                            isDeveloped
                                ? "opacity-100 blur-0"
                                : "opacity-60 blur-sm"
                        }`}
                    />
                </div>
            </PolaroidFrame>

            <div className="flex space-x-4 mt-4">
                <Button disabled={!isDeveloped} onClick={onNext}>
                    ✅ keep it
                </Button>

                <Button onClick={onRetake} variant="secondary">
                    🔁 retake
                </Button>
            </div>
        </div>
    );
}
