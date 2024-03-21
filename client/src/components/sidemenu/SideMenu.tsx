"use client"

import { MdHomeFilled } from "react-icons/md";
import { useRouter } from "next/navigation";
import MenuItem from "./MenuItem";
import { SiYoutubeshorts } from "react-icons/si";

const SideMenu = () => {
    const router = useRouter();
    return ( 
        <div className="mx-2 flex flex-col mt-2">
            <MenuItem label="Home" icon={MdHomeFilled} size={25} onClick={() => router.push("/")}/>
            <MenuItem label="Short" icon={SiYoutubeshorts } size={25} onClick={() => router.push("/")}/>
            <MenuItem label="Home" icon={MdHomeFilled} size={25} onClick={() => router.push("/")}/>
        </div>
     );
}
 
export default SideMenu;