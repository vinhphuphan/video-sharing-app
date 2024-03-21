"use client";

import { BsFire } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { PiDressLight, PiMusicNoteLight } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { CiTrophy } from "react-icons/ci";
import { CgGym } from "react-icons/cg";
import { GrBitcoin } from "react-icons/gr";
import TypeCard from "./TypeCard";

export const Videotypes = [
  {
    id: 1,
    label: "New",
    icon: BsFire,
  },
  {
    id: 2,
    label: "Coding",
    icon: FaCode,
  },
  {
    id: 3,
    label: "Music",
    icon: PiMusicNoteLight,
  },
  {
    id: 4,
    label: "Gaming",
    icon: SiYoutubegaming,
  },
  {
    id: 5,
    label: "Sport",
    icon: CiTrophy,
  },
  {
    id: 6,
    label: "Fashion",
    icon: PiDressLight,
  },
  {
    id: 7,
    label: "Gym",
    icon: CgGym,
  },
  {
    id: 8,
    label: "Crypto",
    icon: GrBitcoin,
  },
];

const VideoType = () => {
  return (
    <div className="py-3 flex flex-row items-center justify-between gap-4  overflow-x-auto">
      {
        Videotypes.map((type) => (
            <TypeCard 
                key={type.id}
                label={type.label}
            />
        ))
      }
    </div>
  );
};

export default VideoType;
