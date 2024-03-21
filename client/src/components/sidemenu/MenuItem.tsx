"use client";

import { IconType } from "react-icons";

interface MenuItem {
  label: string;
  onClick?: () => void;
  icon?: IconType;
  size?: number;
}

const MenuItem: React.FC<MenuItem> = ({
  label,
  onClick,
  size,
  icon: Icon,
}) => {
  return (
    <div
      onClick={onClick}
      className="w-full pl-3 pr-24 py-3 bg-white dark:bg-black rounded-xl hover:bg-gray-200 transition cursor-pointer"
    >
      <div className="flex items-center gap-4">
        {Icon && <Icon size={size} />}
        <div className="text-sm font-medium">{label}</div>
      </div>
    </div>
  );
};

export default MenuItem;
