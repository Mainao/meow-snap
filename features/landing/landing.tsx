"use client";

import CatMascot from "@/components/mascot/cat-mascot";
import Button from "@/components/ui/button";

export function Landing() {
   
  return (
    <div className="flex flex-col items-center justify-center space-y-8 min-h-screen animate-fade-in-up">
        <CatMascot />
        <div className="cute-text text-3xl md:text-4xl text-center">
            <p>hey! i made something for you 🥺</p>
            <p>will you take a polaroid with me?</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary">
                ✅ yes
            </Button>
            <Button variant="secondary">
                ❌ no
            </Button> 
        </div>
    </div>
  );
}
