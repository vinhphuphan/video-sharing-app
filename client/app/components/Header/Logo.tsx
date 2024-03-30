"use client"

import Image from "next/image"
import { useRouter } from "next/navigation";

interface LogoProps {
    dark? : boolean
}

const Logo:React.FC<LogoProps> = ({ dark }) => {
    const router = useRouter();
    return ( 
        <Image
          alt="logo"
          width={90}
          height={90}
          className="cursor-pointer"
          onClick={() => router.push("/")}
          src={dark ? "logo_darkmode.svg" : "logo.svg"}
        />
    );
}
 
export default Logo;