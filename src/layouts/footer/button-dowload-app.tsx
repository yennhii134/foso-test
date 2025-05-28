import { derivedAltImage } from "@/utils/derived-alt-image";

interface ButtonDownloadAppProps {
  href: string;
  label: string;
  dowloadAt: string;
  iconSrc: string;
  className?: string;
}

const ButtonDowloadApp = ({
  href,
  label,
  dowloadAt,
  iconSrc,
  className = "",
}: ButtonDownloadAppProps) => {
  return (
    <button
      className={`cursor-pointer ${className} rounded-xl py-4 2xl:py-[18px] px-4 2xl:px-5 max-w-[230px]`}
    >
      <a href={href} className="flex items-center justify-between gap-2">
        <img
          src={iconSrc}
          alt={derivedAltImage(iconSrc)}
          className="w-5 object-contain"
        />
        <div className="text-white text-start">
          <p className="text-sm font-normal leading-5">{label}</p>
          <p className="text-sm 2xl:text-base font-semibold">{dowloadAt}</p>
        </div>
      </a>
    </button>
  );
};

export default ButtonDowloadApp;
