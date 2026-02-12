import Image from "next/image";

export default function CatSticker() {
    return (
        <Image
            src="/images/cat-sticker.webp"
            alt="MeowSnap cat mascot"
            width={579}
            height={386}
            className="w-75 h-auto"
        />
    );
}
