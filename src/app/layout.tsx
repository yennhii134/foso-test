import FooterLayout from "@/layouts/footer";
import HeaderLayout from "@/layouts/header";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["vietnamese", "latin"],
});

export const metadata: Metadata = {
  title: "FOSO TEST",
  description: "Buidling a Next.js application with FOSO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.variable} antialiased`}>
        <HeaderLayout />
        <div className="mt-[168px] md:mt-[244px] xl:mt-[276px]">{children}</div>
        <FooterLayout />
      </body>
    </html>
  );
}
