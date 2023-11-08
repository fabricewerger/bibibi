import type { ReactElement } from "react";

interface PillProps {
  children: string;
  variant?: "primary" | "secondary";
  icon?: ReactElement;
  onClick?: () => void;
}

interface IPillFamilyClasses {
  variant: Record<string, Record<string, string>>;
}

const pillFamilyClasses: IPillFamilyClasses = {
  variant: {
    primary: {
      base: " bg-blue-white text-orange-600 before:border-orange-600 before:hover:border-2 before:hover:border-orange-600 before:focus:border-2 before:focus:border-orange-200",
    },
    secondary: {
      base: "bg-blue-100 text-blue-900 before:border-blue-300 before:hover:border-2 before:focus:border-2 before:focus:border-info-500",
    },
  },
};

const Pill = ({
  children,
  variant = "secondary",
  icon,
  onClick,
}: PillProps) => {
  return (
    <div
      className={`before:border-1 relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full p-sm text-xs font-bold outline-none transition-colors before:absolute before:top-[0px] before:right-[0px] before:bottom-[0px] before:left-[0px] before:rounded-full before:border ${pillFamilyClasses["variant"][variant]["base"]}`}
      onClick={onClick}
    >
      <span className="inline-flex items-center justify-center [&>*+span]:ml-1 [&>*:first-child]:order-first">
        {icon && <span>{icon}</span>}
        {children && <span>{children}</span>}
      </span>
    </div>
  );
};

export default Pill;
