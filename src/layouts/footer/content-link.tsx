import Link from "next/link";

interface ContentLinkProps {
  href: string;
  label: string;
}
const ContentLink = ({ href, label }: ContentLinkProps) => {
  return (
    <Link
      href={href}
      className="text-secondary cursor-pointer text-sm 2xl:text-base leading-7 font-normal"
    >
      {label}
    </Link>
  );
};

export default ContentLink;
