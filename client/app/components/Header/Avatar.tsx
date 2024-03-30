import Image from "next/image";

interface AvatarProps {
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      alt="avatar"
      height={30}
      width={30}
      className="rounded-full cursor-pointer"
      src={src || "placeholder.svg"}
    />
  );
};

export default Avatar;
