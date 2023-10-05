import type { ReactElement } from "react";
import "./styles.css";

interface ButtonProps {
  icon: ReactElement;
  title: string;
  color?: "neutral" | "blue" | "pink";
}

export function MultistepButtons({
  icon,
  title,
  color = "neutral",
}: ButtonProps) {
  return (
    <button className={`btn-multistep ${color}`}>
      {icon}
      {title}
    </button>
  );
}
