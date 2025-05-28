const SmallOne = () => {
  return (
    <div className="hidden md:block mx-auto h-7 py-1 text-secondary-50 text-xs leading-4 font-normal bg-gradient-to-r from-[#0D57C6] via-[#37CFFF] to-[#0F5ED6]">
      <div className="flex items-center justify-between h-full container-layout mx-auto">
        <div className="flex items-center gap-2 flex-1">
          <div className="flex items-center">
            <img
              src="/images/header/subtract.svg"
              alt="Subtract"
              className="mx-auto"
            />
          </div>
          <div>
            <p>
              Nhập mã <span className="text-yellow-primary">NEWBIE</span> giảm
              ngay 10% cho lần đầu mua hàng.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src="/images/header/call.svg"
              alt="Vector"
              className="mx-auto"
            />
            <div>
              <p>
                Hotline:{" "}
                <span className="text-yellow-primary">0283 760 7607</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/images/header/smartphone.svg"
              alt="Vector"
              className="mx-auto"
            />
            <p>Tải ứng dụng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallOne;
