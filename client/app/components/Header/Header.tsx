"use client";
import Button from "../Button";
import { Mic, Bell, EllipsisVertical, Menu, Search, Video } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import Avatar from "./Avatar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SettingsMenu from "./SettingsMenu";

interface HeaderProps {
  currentUser?: boolean;
  dark?: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentUser, dark }) => {
  const [searchFullWidth, setSearchFullWidth] = useState(false); // State for managing responsive
  const [isOpen, setIsOpen] = useState(false); // State for Settings
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Toggle the Settings
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [setIsOpen]);

  // Handle outside click the settings menu
  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      // Check if the click is outside the menu and button
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className="flex gap-10 lg:gap-20 items-center justify-between py-2 mx-4 mb-4">
      {/* Left of header */}
      <div className={`flex-shrink-0 items-center gap-4 ${searchFullWidth ? "hidden" : "flex"}`}>
        <Button variant="icon" size="icon">
          <Menu size={24}/>
        </Button>
        <Logo />
      </div>

      {/* Center of Header */}
      <SearchBar
        searchFullWidth={searchFullWidth}
        setSearchFullWidth={setSearchFullWidth}
      />

      {/* Right of Header */}
      <div
        className={`flex-shrink-0 gap-2 mr-2 md:gap-4 md:mr-4 ${
          searchFullWidth ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setSearchFullWidth(true)}
          variant="icon"
          size="icon"
          className="md:hidden"
        >
          <Search strokeWidth={1} size={20} />
        </Button>
        <Button variant="icon" size="icon" className="md:hidden">
          <Mic />
        </Button>
        {currentUser ? (
          <>
            <Button variant="icon" size="icon">
              <Video size={25} />
            </Button>
            <Button variant="icon" size="icon">
              <Bell />
            </Button>
            <Avatar />
          </>
        ) : (
          <>
            {/* Setting Button */}
            <Button
              variant="icon"
              size="icon"
              buttonRef={buttonRef}
              onClick={toggleOpen}
              className="relative"
            >
              <EllipsisVertical />
            </Button>
            {/* Settings*/}
            {isOpen && (
              <div
                ref={menuRef}
                className="absolute top-14 right-30 md:right-40 z-20 w-[20vw] bg-white shadow-xl border-[1px] rounded-xl overflow-hidden"
              >
                <SettingsMenu />
              </div>
            )}
            {/* Sign in Button */}
            <Button variant="signin" size="signin" onClick={() => {}}>
              <div className="w-6">
                <Avatar />
              </div>
              <div className="text-sm font-medium text-primary-blue">
                Sign in
              </div>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
