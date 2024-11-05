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
      className={`h-[${h}px] w-[${w}px] rounded-2xl bg-dark-blue shadow-lg`}
    >
      {children}
    </Component>
  );
};

export default Card;
