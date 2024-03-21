import Image from "next/image";

interface AvatarProps {
  src?: string;
  width? : number,
  height? : number,
}

const Avatar: React.FC<AvatarProps> = ({ src, width, height }) => {
  return (
    <Image
      alt="avatar"
      height={30 || height}
      width={30 || width}
      className="rounded-full"
      src={src || "/images/placeholder.svg"}
    />
  );
};

export default Avatar;
