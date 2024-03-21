import Image from "next/image";

interface LogoProps {
    dark? : boolean;
}

const Logo:React.FC<LogoProps> = ({dark}) => {
    return ( 
        <Image 
            alt="logo"
            width={90}
            height={90}
            className="cursor-pointer"
            src={dark ? "/images/logo_darkmode.svg" : "/images/logo.svg"}
        />
    );
}
 
export default Logo;