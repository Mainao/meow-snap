import Image from "next/image";

export default function CatStickerSad() {
    return (
        <Image
            src="/images/cat-sticker-sad.webp"
            alt="MeowSnap cat sticker sad"
            width={579}
            height={386}
            className="w-75 h-auto"
        />
    );
}
