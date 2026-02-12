"use client";

import { useState } from "react";
import { Landing } from "../landing";
import { CameraView, CameraPermission, PhotoPreview } from "../camera";

type Stage = "landing" | "permission" | "camera" | "preview";

export default function PhotoboothFlow() {
    const [stage, setStage] = useState<Stage>("landing");
    const [photo, setPhoto] = useState<string | null>(null);

    const handlePhotoCaptured = (capturedPhoto: string) => {
        setPhoto(capturedPhoto);
        setStage("preview");
    };

    return (
        <>
            {stage === "landing" && (
                <Landing onNext={() => setStage("permission")} />
            )}

            {stage === "permission" && (
                <CameraPermission onNext={() => setStage("camera")} />
            )}

            {stage === "camera" && (
                <CameraView onPhotoCaptured={handlePhotoCaptured} />
            )}

            {stage === "preview" && photo && (
                <PhotoPreview
                    photo={photo}
                    onRetake={() => setStage("camera")}
                />
            )}
        </>
    );
}
