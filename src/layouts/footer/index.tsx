import { ChevronDown } from "lucide-react";
import Link from "next/link";
import ButtonDowloadApp from "./button-dowload-app";
import ContentLink from "./content-link";
import ContentWrapper from "./content-wrapper";

const FooterLayout = () => {
  return (
    <div className="relative container-layout">
      <div className="absolute inset-0 bg-[url(/images/footer/bg-footer.jpg)] bg-cover bg-center -z-10 opacity-35"></div>

      <div className="flex flex-col gap-8 xl:flex-row xl:gap-4 items-start justify-between py-16 xl:py-24">
        {/* Information */}
        <div className="flex flex-col justify-center gap-8">
          <div className="flex flex-col justify-center gap-10 text-base 2xl:text-[20px] leading-6">
            <div>
              <p className="font-semibold text-brand-800">
                Viet Hung Auto Production Trading Joint Stock Company
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <p className="text-secondary">
                Tax code: <span className="font-semibold">0305094228</span>
              </p>
              <p className="text-secondary">
                Address:{" "}
                <span className="font-semibold">
                  13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet
                  Nam.
                </span>
              </p>
              <p className="text-secondary">
                Phone number:{" "}
                <span className="font-semibold">0283 760 7607</span>
              </p>
              <p className="text-secondary">
                Opening hour:{" "}
                <span className="font-semibold">
                  09:00 - 22:00 from Mon - Fri
                </span>
              </p>
            </div>
          </div>
          <div>
            <img
              src="/images/footer/bo-cong-thuong-logo.png"
              alt="bo-cong-thuong-logo"
              className="object-contain h-[76px] w-auto"
            />
          </div>
        </div>

        {/* Sitemap */}
        <ContentWrapper label="Sitemap">
          <ContentLink label="About" href="/" />
          <ContentLink label="Article" href="/" />
          <ContentLink label="Cart" href="/" />
          <ContentLink label="Contact" href="/" />
        </ContentWrapper>

        {/* Legal */}
        <ContentWrapper label="Legal">
          <div>
            <Link
              href="/"
              className="text-primary cursor-pointer text-sm 2xl:text-base leading-7 font-semibold before:content-[''] before:inline-block before:w-4 before:border-[1.5px] before:border-primary before:mr-2"
            >
              Privacy policy
            </Link>
          </div>
          <ContentLink label="Cookie policy" href="/" />
          <ContentLink label="Delivery policy" href="/" />
          <ContentLink label="FAQs" href="/" />
        </ContentWrapper>

        {/* Download App */}
        <ContentWrapper label="Download App">
          <div className="flex flex-col justify-center gap-8">
            <ButtonDowloadApp
              href="/"
              label="Get It On"
              dowloadAt="Google Play Store"
              iconSrc="/images/footer/google-play-store.svg"
              className="bg-primary"
            />
            <ButtonDowloadApp
              href="/"
              label="Download from"
              dowloadAt="Apple App Store"
              iconSrc="/images/footer/apple-app-store.svg"
              className="bg-brand-500"
            />
            <div className="flex items-center justify-start xl:justify-end gap-2">
              <img
                src="/icons/ico-country-c-vietnam.svg"
                alt="Vietnam Flag"
                className="size-9 object-contain"
              />
              <div className="flex items-center gap-2">
                <p className="font-medium text-xl leading-4">VI</p>
                <ChevronDown />
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default FooterLayout;
