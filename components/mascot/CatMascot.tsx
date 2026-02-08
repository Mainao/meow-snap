import Image from "next/image";

export default function CatMascot() {
  return (
    <Image
      src="/images/cat-mascot.webp"
      alt="MeowSnap cat mascot"
      width={579}
      height={386}
      className="w-[300px] h-auto"
    />
  );
}
