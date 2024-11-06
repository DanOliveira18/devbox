import clsx from "clsx";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "section" | "article" | "aside" | "main";
  w: number;
  h: number;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  as: Component = "div",
  w,
  h,
  children,
  className,
  ...rest
}) => {
  return (
    <Component
      className={clsx("rounded-2xl bg-dark-blue shadow-lg", className)}
      style={{ width: `${w}px`, height: `${h}px` }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Card;
