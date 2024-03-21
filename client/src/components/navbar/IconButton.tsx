"use client";

import { Tooltip } from "@material-tailwind/react";
import { IconType } from "react-icons";

interface IconButtonProps {
  icon?: IconType;
  onClick : () => void;
  size? : number;
  toolTip? : string;
  style? : {};
}

const IconButton: React.FC<IconButtonProps> = ({ 
    icon: Icon,
    size,
    onClick,
    toolTip,
    style
 }) => {
  return (
    <Tooltip
        content={toolTip}
        placement="bottom"
        className="text-white text-xs bg-gray-600 rounded-md"
        offset={15}
    >
      <button style={style} onClick={onClick} className="flex items-center justify-center p-3 rounded-full bg-[#f8f8f8] hover:bg-[#f0f0f0] transition cursor-pointer">
      {Icon && (
        <Icon size={size}/>
      )}
    </button>
    </Tooltip>
  );
};

export default IconButton;
