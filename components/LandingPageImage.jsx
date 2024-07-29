import Image from "next/image";
import Photo from "@/assets/photo.png";

export default function LandingPageImage({ winCheck }) {
  return (
    <div className={`image h-[90vh] ${winCheck ? '' : '-translate-y-10'} overflow-hidden`}>
      <Image
        src={Photo}
        alt="Amon Sharma"
        fill={true}
        objectFit={`cover`}
        objectPosition="right top"
        className="z-0"
      />
    </div>
  );
}
