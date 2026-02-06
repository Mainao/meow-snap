import Image from "next/image";

export default function CatMascot() {
  return (
    <Image
      src="/images/cat-mascot.webp"
      alt="MeowSnap cat mascot"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "300px", height: "auto" }}
    />
  );
}
