import StarSVG from "public/star.svg";

export default function Star({ isFavorite }: { isFavorite: boolean }) {
  return (
    <StarSVG
      className={`hover:scale-110 transition-all ${isFavorite ? "text-yellow-400" : "stroke-black fill-transparent"}`}
      width={24}
      height={24}
    />
  );
}
