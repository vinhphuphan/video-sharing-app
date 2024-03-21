"use client";

import Search from "./Search";
import IconButton from "./IconButton";
import { FaMicrophone } from "react-icons/fa6";

const Center = () => {
    return ( 
        <div className="flex flex-row items-center gap-4">
            <Search />
            <IconButton icon={FaMicrophone } size={18} toolTip="Search with your voice" onClick={() => {}}/>
        </div>
    );
}
 
export default Center;