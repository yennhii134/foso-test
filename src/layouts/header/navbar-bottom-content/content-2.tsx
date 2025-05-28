import { cn } from "@/lib/utils";
import { FeatureItem } from "./feature-item";

const Content2 = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 2xl:flex place-items-center items-center gap-5 pb-4 md:pb-0",
        className
      )}
    >
      <FeatureItem icon="/images/header/bullet.svg" text="Hỗ trợ 24/7" />
      <FeatureItem
        icon="/images/header/hand-money.svg"
        text="Miễn phí vận chuyển"
      />
      <FeatureItem
        icon="/images/header/truck_fill.svg"
        text="Giao hàng nhanh 2h"
      />
      <FeatureItem
        icon="/images/header/refresh-circle.svg"
        text="30 ngày đổi trả"
      />
    </div>
  );
};

export default Content2;
