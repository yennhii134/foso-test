import { derivedAltImage } from "@/utils/derived-alt-image";

interface FeatureItemProps {
  icon: string;
  text: string;
}
export const FeatureItem = ({ icon, text }: FeatureItemProps) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer justify-start md:justify-center w-full sm:w-[80%] md:w-auto">
      <img src={icon} alt={derivedAltImage(icon)} />
      <p className="text-sm 3xl:text-base font-medium">{text}</p>
    </div>
  );
};
