interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?:
    | "div"
    | "section"
    | "article"
    | "aside"
    | "header"
    | "footer"
    | "main"
    | "nav";
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
      className={`h-[${h}px] w-[${w}px] rounded-2xl bg-dark-blue shadow-lg`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Card;
