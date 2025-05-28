import React from "react";

interface ContentWrapperProps {
  label: string;
  children: React.ReactNode;
}

const ContentWrapper = ({ label, children }: ContentWrapperProps) => {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-brand-800 text-xl 2xl:text-2xl leading-[30px] font-semibold">
        {label}
      </p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default ContentWrapper;
