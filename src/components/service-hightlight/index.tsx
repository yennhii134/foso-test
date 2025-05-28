const ServiceHighlights = () => {
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-8 rounded-lg ">
      {serviceHightLights.map((service: ServiceHighlight) => (
        <div
          key={service.id}
          className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-[0_8px_16px_0_rgba(145_158_171_0.16)] h-full"
        >
          <img src={service.icon} alt="Icon" className="size-12" />
          <div className="flex flex-col justify-center gap-2">
            <p className="font-bold text-base">{service.title}</p>
            <p className="font-medium text-sm text-secondary">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceHighlights;

type ServiceHighlight = {
  id: string;
  icon: string;
  title: string;
  description: string;
};
const serviceHightLights: ServiceHighlight[] = [
  {
    id: "free-shipping",
    icon: "/icons/money标签.svg",
    title: "Miễn phí vận chuyển",
    description: "Với hoá đơn từ 1 triệu",
  },
  {
    id: "free-support",
    icon: "/icons/support客服管理.svg",
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
  },
  {
    id: "fast-delivery",
    icon: "/icons/delivery物流.svg",
    title: "Giao hàng nhanh 2h",
    description: "Trong vòng bán kính 10km nội thành TP HCM",
  },
  {
    id: "return-policy",
    icon: "/icons/package收藏.svg",
    title: "30 ngày đổi trả",
    description:
      "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển",
  },
];
