"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

const MESSAGES = {
  rejected: (
    <>
      <p>oh... ok... i'll just...</p>
      <p>wait here 😔</p>
    </>
  ),
  default: (
    <>
      <p>hey! i made something for you 🥺</p>
      <p>will you take a polaroid with me?</p>
    </>
  ),
} as const;

const BUTTON_TEXT = {
  rejected: "fine i changed my mind 😭",
  default: "✅ yes",
} as const;

interface LandingActionsProps {
  rejected: boolean;
  onReject: () => void;
}

export function LandingActions({ rejected, onReject }: LandingActionsProps) {
  const router = useRouter();

  const handleAccept = () => {
    router.push("/permission");
  };

  return (
    <>
      <div className="cute-text text-3xl md:text-4xl text-center">
        {rejected ? MESSAGES.rejected : MESSAGES.default}
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Button variant="primary" onClick={handleAccept}>
          {rejected ? BUTTON_TEXT.rejected : BUTTON_TEXT.default}
        </Button>
        {!rejected && (
          <Button variant="secondary" onClick={onReject}>
            ❌ no
          </Button>
        )}
      </div>
    </>
  );
}