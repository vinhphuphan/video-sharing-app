import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";

const Start = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
        <AiOutlineMenu size={20} />
      </div>
      <Logo dark={false} />
    </div>
  );
};

export default Start;
