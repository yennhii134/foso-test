import { cn } from "@/lib/utils";

const Content1 = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-4 2xl:flex items-center gap-5 text-sm 3xl:text-base",
        className
      )}
    >
      <div className="cursor-pointer font-medium text-center">Về chúng tôi</div>
      <div className="cursor-pointer font-medium text-center">Bài viết</div>
      <div className="cursor-pointer font-medium text-center">Catalog</div>
      <div className="cursor-pointer font-medium text-center">Liên hệ</div>
    </div>
  );
};

export default Content1;
