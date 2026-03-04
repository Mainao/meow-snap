import Image from "next/image";
import type { StickerVariant } from "@/types/components";

const STICKERS: Record<StickerVariant, { src: string; alt: string; priority?: boolean }> = {
    default: { src: "/images/stickers/cat-sticker.webp",        alt: "KittyCam cat mascot",      priority: true },
    sad:     { src: "/images/stickers/cat-sticker-sad.webp",    alt: "Sad KittyCam cat" },
    camera:  { src: "/images/stickers/cat-sticker-camera.webp", alt: "KittyCam cat with camera" },
};

export default function CatSticker({ variant = "default" }: { variant?: StickerVariant }) {
    const { src, alt, priority } = STICKERS[variant];
    return (
        <Image
            src={src}
            alt={alt}
            width={579}
            height={386}
            unoptimized
            priority={!!priority}
            className="w-75 h-auto"
        />
    );
}
