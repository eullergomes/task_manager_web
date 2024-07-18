// SidebarButton.tsx
import React from 'react';

interface SidebarButtonProps {
  children: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  variant: "unselected" | "selected";
}

const SidebarButton = ({ children, icon: Icon, variant }: SidebarButtonProps) => {
  const getVariantClasses = () => {
    if (variant === "unselected") {
      return "text-[#35383E]";
    }

    if (variant === "selected") {
      return "bg-[#E6F7F8] text-[#00ADB5]";
    }
  };

  return (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-lg px-6 py-3 ${getVariantClasses()}`}
    >
      <Icon />
      {children}
    </a>
  );
}

export default SidebarButton;
