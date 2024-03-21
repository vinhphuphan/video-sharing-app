"use client";

import { FaMicrophone } from "react-icons/fa";

const Center = () => {
    return ( 
        <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-4 border-[1px] rounded-xl">
                
            </div>
            <div className="flex items-center justify-center p-3 bg-neutral-100 hover:bg-neutral-200 transition rounded-full cursor-pointer">
                <FaMicrophone size={20}/> 
            </div>
        </div>
    );
}
 
export default Center;