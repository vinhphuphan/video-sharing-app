"use client";

import { IconType } from "react-icons";

interface SettingItemProps {
  label: string;
  onClick?: () => void;
  icon?: IconType;
  size?: number;
  arrow?: boolean;
}

const SettingItem: React.FC<SettingItemProps> = ({
  label,
  onClick,
  size,
  icon: Icon,
  arrow,
}) => {
  return (
    <div
      onClick={onClick}
      className="relative px-4 py-3 hover:bg-gray-200 transition cursor-pointer"
    >
      <div className="flex items-center gap-4">
        {Icon && <Icon size={size} />}
        <div className="text-sm font-normal">{label}</div>

        {arrow && (
          <div className="absolute right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="28"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "100%",
                height: "100%",
              }}
            >
              <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingItem;
