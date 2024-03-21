import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
    dark? : boolean;
}

const Logo:React.FC<LogoProps> = ({dark}) => {
    const router = useRouter();
    return ( 
        <Image 
            alt="logo"
            width={90}
            height={90}
            className="cursor-pointer"
            onClick={() => router.push("/")}
            src={dark ? "/images/logo_darkmode.svg" : "/images/logo.svg"}
        />
    );
}
 
export default Logo;