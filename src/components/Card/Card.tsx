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
  ...rest
}) => {
  return (
    <Component
      className={"rounded-2xl bg-dark-blue shadow-lg"}
      style={{ width: `${w}px`, height: `${h}px` }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Card;
