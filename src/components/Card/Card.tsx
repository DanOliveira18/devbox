interface CardProps {
  as?: keyof JSX.IntrinsicElements;
  w: number;
  h: number;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  as: Component = "div",
  w,
  h,
  children,
}) => {
  return (
    <Component
      className={"rounded-2xl bg-dark-blue shadow-lg"}
      style={{ width: `${w}px`, height: `${h}px` }}
    >
      {children}
    </Component>
  );
};

export default Card;
