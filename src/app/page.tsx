"use client";
import Banner from "@/components/banner";
import ProductsHome from "@/components/products-home";
import ServiceHighlights from "@/components/service-hightlight";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowRight, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-grey-200 min-h-screen pt-6 flex flex-col gap-8">
      <div className="container-layout flex flex-col gap-8">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Sản phẩm</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Banner />
        <ProductsHome />
        <ServiceHighlights />
      </div>

      <div className="bg-brand-50">
        <div className="container-layout py-8 flex flex-col gap-6 md:gap-2 md:flex-row items-center md:justify-between">
          <div className="flex items-start md:items-center gap-4">
            <Image
              src="/icons/end-icon.svg"
              alt="End Icon"
              className="size-10 xl:size-12"
              width={100}
              height={100}
            />
            <p className="text-xl xl:text-3xl leading-8 font-medium text-center">
              Xem hệ thống 88 cửa hàng trên toàn quốc
            </p>
          </div>
          <button className="bg-white rounded-full py-3 px-6 flex items-center gap-3">
            <p className="text-brand-600 text-lg xl:text-2xl leading-6 font-semibold text-center">
              Xem ngay
            </p>
            <ArrowRight className="text-brand-600" />
          </button>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-[2%] size-10 bg-brand-50 lg:bg-transparent border border-brand-50 lg:border-brand-800 rounded-full p-2 flex items-center z-50"
      >
        <ChevronUp className="text-brand-800" />
      </button>
    </div>
  );
}
