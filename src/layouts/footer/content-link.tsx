interface ContentLinkProps {
  href: string;
  label: string;
}
const ContentLink = ({ href, label }: ContentLinkProps) => {
  return (
    <a
      href={href}
      className="text-secondary cursor-pointer text-sm 2xl:text-base leading-7 font-normal"
    >
      {label}
    </a>
  );
};

export default ContentLink;
