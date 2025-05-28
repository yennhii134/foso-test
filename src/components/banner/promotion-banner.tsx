const PromotionBanner = () => {
  return (
    <div className="overflow-hidden relative min-h-[320px] lg:min-h-[500px] rounded-tl-xl rounded-tr-xl bg-[url(/images/banner/group-1.svg)] bg-cover bg-center relative">
      <div className="absolute top-10 bg-gradient-to-r from-warning-lighter to-warning-light w-60 md:w-[273px] h-[52px] rounded-tr-full rounded-br-full py-[6px] md:py-[10px] px-12 flex items-center">
        <p className="uppercase text-lg md:text-2xl font-bold text-error-darker text-center">
          mới cực hot!
        </p>
      </div>

      <div className="absolute top-[136px] left-[42px] flex flex-col gap-5">
        <h1 className="text-[#FFFFFF] text-2xl md:text-5xl 3xl:text-7xl font-extrabold uppercase [text-shadow:-4px_0_#1250EF,4px_0_#1250EF,0_-4px_#1250EF,0_4px_#1250EF,-4px_-4px_#1250EF,4px_4px_#1250EF,-4px_4px_#1250EF,4px_-4px_#1250EF] md:[text-shadow:-8px_0_#1250EF,8px_0_#1250EF,0_-8px_#1250EF,0_8px_#1250EF,-8px_-8px_#1250EF,8px_8px_#1250EF,-8px_8px_#1250EF,8px_-8px_#1250EF]">
          tải app nhận quà
        </h1>
        <p className="text-warning-light text-lg md:text-2xl 3xl:text-[32px] leading-[48px] font-medium">
          Tích điểm ngay trên app{" "}
          <span className="font-extrabold">SUNFIL1</span> <br />{" "}
          <i className="font-semibold">*100K = 10 điểm</i>
        </p>
      </div>

      <div className="hidden lg:block absolute top-12 left-1/2 translate-x-20">
        <div className="relative">
          <div className="transform -translate-x-12 -translate-y-20 -rotate-[25deg]">
            <img
              src="/images/banner/vecteezy_dynamic-splash-of-liquid-gold.png"
              alt="banner 3"
              className="object-contain max-w-[811px] 3xl:max-w-[911px]"
            />
          </div>
          <div className="absolute top-0">
            <img
              src="/images/banner/group-2.svg"
              alt="banner 2"
              className="object-contain w-[500px] 3xl:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
