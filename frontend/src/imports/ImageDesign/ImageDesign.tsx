import img from "figma:asset/44293e86d4559c22343cacae7dac5107e4e0f92e.png";

export default function ImageDesign({ className }: { className?: string }) {
  return (
    <img
      src={img}
      alt="Design illustration"
      className={className}
    />
  );
}
