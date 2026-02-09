"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import CatMascot from "@/components/mascot/CatMascot";
import Button from "@/components/ui/Button";

export function Permission() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleAllowCamera = useCallback(async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop());
      router.push("/camera");
    } catch (err) {
      console.error("Camera access denied:", err);
      setError(
        "Oops! I can't see without camera access. Please enable it in your browser settings!"
      );
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center min-h-screen">
      <CatMascot />
      <h1 className="text-4xl md:text-5xl font-bold font-handwritten">SMILEEEEE</h1>
      <p className="font-handwritten text-2xl md:text-3xl">
        click allow so i can take your photo!!
      </p>
      <Button onClick={handleAllowCamera}>Allow Camera 📷</Button>
      {error && (
        <p className="text-red-500 mt-4 font-handwritten text-xl">{error}</p>
      )}
    </div>
  );
}