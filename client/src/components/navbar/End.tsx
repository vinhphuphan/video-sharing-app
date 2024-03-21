"use client";

import { BiVideoPlus } from "react-icons/bi";
import { IoIosHelpCircleOutline, IoIosNotificationsOutline } from "react-icons/io";
import Avatar from "../Avatar";
import IconButton from "./IconButton";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useCallback, useState } from "react";
import SettingItem from "./SettingItem";
import { RiShieldUserLine } from "react-icons/ri";
import { WiMoonWaxingCrescent4 } from "react-icons/wi";
import { HiLanguage } from "react-icons/hi2";
import { MdOutlineFeedback, MdOutlinePrivacyTip } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { FaRegKeyboard } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";

interface EndProps {
  currentUser: boolean;
}

const End: React.FC<EndProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [setIsOpen]);

  return (
    <div className="flex flex-row items-center gap-2 pr-4">
      {currentUser ? (
        <>
          <IconButton
            icon={BiVideoPlus}
            size={25}
            toolTip="Create New Video"
            onClick={() => {}}
          />
          <IconButton
            icon={IoIosNotificationsOutline}
            size={25}
            toolTip="Notifications"
            onClick={() => {}}
            style={{ background: "none" }}
          />
          <div className="flex items-center justify-center rounded-full cursor-pointer px-2">
            <Avatar />
          </div>
        </>
      ) : (
        <div className="relative">
          <div className="flex flex-row items-center gap-2">
          <IconButton
            icon={BsThreeDotsVertical}
            size={18}
            toolTip="Settings"
            onClick={toggleOpen}
          />
          <div className="flex items-center justify-center rounded-3xl cursor-pointer px-3 py-2 gap-2 border-[1px] border-[#0000001a] hover:bg-[#def1ff] transition">
            <div className="rounded-full w-6">
              <Avatar />
            </div>
            <div className="text-sm font-medium text-[#065fd4]">Sign in</div>
          </div>
          </div>
          {isOpen && (
            <div
            // ref={menuRef}
            className="absolute top-11 left-0 z-20 md:-translate-x-32 lg:-translate-x-64 w-[30vw]  md:w-[20vw] bg-white shadow-xl border-[1px] rounded-xl overflow-hidden"
          >
            <div className="flex flex-col">
              <>
                <SettingItem label="Your data in Youtube" onClick={() => {}} icon={RiShieldUserLine} size={18}/>
                <SettingItem label="Appearance: Device theme" onClick={() => {}} icon={WiMoonWaxingCrescent4} size={18} arrow/>
                <SettingItem label="Language: English" onClick={() => {}} icon={HiLanguage} size={18} arrow/>
                <SettingItem label="Restricted Mode: Off" onClick={() => {}} icon={MdOutlinePrivacyTip} size={18} arrow/>
                <SettingItem label="Location: VietNam" onClick={() => {}} icon={TfiWorld} size={18} arrow/>
                <SettingItem label="Keyboard shortcuts" onClick={() => {}} icon={FaRegKeyboard} size={18}/>
                <hr />
                <SettingItem label="Settings" onClick={() => {}} icon={CiSettings} size={18} />
                <hr />
                <SettingItem label="Help" onClick={() => {}} icon={IoIosHelpCircleOutline } size={18} />
                <SettingItem label="Send Feedback" onClick={() => {}} icon={MdOutlineFeedback } size={18} />
              </>
            </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default End;
