import Link from "next/link";

interface IconLinkProps {
  link: string;
  size?: number;
  icon: React.ElementType;
}

const IconLink: React.FC<IconLinkProps> = ({ link, icon: Icon, size = 50 }) => {
  return (
    <Link href={link} target="_blank">
      <Icon
        className="hover:text-primary-400 cursor-pointer text-primary-100 transition-all duration-300"
        style={{ fontSize: size }}
      />
    </Link>
  );
};

export default IconLink;
