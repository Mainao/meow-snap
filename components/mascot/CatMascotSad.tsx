import Image from "next/image";

export default function CatMascot() {
  return (
    <Image
      src="/images/cat-mascot-sad.webp"
      alt="MeowSnap cat mascot sad"
      width={386}
      height={386}
      className="w-[300px] h-auto"
    />
  );
}
