import type { JSX } from "react";
import { twMerge } from "tailwind-merge";

type DisplayFieldProps = {
  label: string;
  LabelIcon?: JSX.Element;
  value: string;
  valueClassName?: string;
}

const DisplayField = ({ label, LabelIcon, value, valueClassName }: DisplayFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5">
        {LabelIcon}

        <p className="uppercase text-sm text-black/60 font-medium">
          {label}
        </p>
      </div>

      <div className="flex items-center justify-center h-10.5 rounded-2xl border border-black/10">
        <p className={twMerge('font-medium text-base text-black/90', valueClassName)}>
          {value}
        </p>
      </div>
    </div>
  );
}

export default DisplayField;
