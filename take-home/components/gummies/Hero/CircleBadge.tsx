import React from "react";

type Size = "sm" | "md" | "lg";
const SIZE = { sm: 72, md: 96, lg: 120 };

type Props = {
  children: React.ReactNode;
  size?: Size | number;
  rotateDeg?: number;
  className?: string;       
  bgClass?: string;         
  textClass?: string;       
  ringClass?: string;       
  as?: "div" | "button";    
  title?: string;           
};

const CircleBadge = ({
  children,
  size = "md",
  rotateDeg = -12,
  className = "",
  bgClass = "bg-black",
  textClass = "text-white",
  ringClass = "ring-1 ring-black/20",
  as = "div",
  title,
}: Props) => {
  const px = typeof size === "number" ? size : SIZE[size];
  const El = as;

  return (
    <El
      className={[
        "grid place-items-center rounded-full select-none shadow-xl",
        bgClass,
        textClass,
        ringClass,
        className,
      ].join(" ")}
      style={{ width: px, height: px, transform: `rotate(${rotateDeg}deg)` }}
      aria-label={title}
      title={title}
    >
      {children}
    </El>
  );
}

export default CircleBadge;