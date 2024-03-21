"use client";

import Container from "../Container";
import Center from "./Center";
import Start from "./Start";
import End from "./End";
import VideoType from "../videotypes/VideoType";

interface NavbarProps {
  currentUser?: null;
  videoType?: boolean;
  sidebar?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser, videoType, sidebar }) => {
  return (
    <div className="w-full fixed z-10">
      <div className="py-2 border-b-[1px]">
        <Container>
          <div className="flex flex-col gap-2">
            {/* Nav bar start */}
            <div className="flex flex-row items-center justify-between">
              <Start />
              <Center />
              <End currentUser={false} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
