import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuUserSquare2 } from "react-icons/lu";
import { MdOutlineHistory } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { FiThumbsUp } from "react-icons/fi";
const Sidebar = () => {
  return (
    <div className="flex w-[16%] flex-col fixed  pr-6 pl-2   mt-14">
      <div className="flex flex-col  ">
        <p className="flex gap-6 items-center hover:bg-zinc-200 rounded-lg px-2 py-3   text-lg font-medium  ">
          <GoHomeFill className="text-2xl " />
          Home
        </p>
        <p className="flex gap-6 items-center hover:bg-zinc-200 rounded-lg py-3 px-2  text-lg font-medium   ">
          <SiYoutubeshorts className="text-2xl " />
          Shorts
        </p>
        <p className="flex gap-6 items-center hover:bg-zinc-200 rounded-lg py-3 px-2  text-lg font-medium ">
          <MdOutlineSubscriptions className="text-2xl " />
          Subscriptions
        </p>
      </div>
      <div className="flex flex-col  ">
        <p className="flex gap-6 items-center hover:bg-zinc-200 rounded-lg py-3 px-2  text-lg font-medium ">
          <LuUserSquare2 className="text-2xl " />
          Your Channel
        </p>
        <p className="flex gap-6 items-center hover:bg-zinc-200 rounded-lg py-3 px-2  text-lg font-medium ">
          <MdOutlineHistory className="text-2xl " />
          History
        </p>
        <p className="flex gap-6 items-center hover:bg-zinc-200 rounded-lg py-3 px-2  text-lg font-medium ">
          <RiVideoLine className="text-2xl " />
          Your Videos
        </p>
        <p className="flex gap-6 items-center hover:bg-zinc-200 rounded-lg py-3 px-2  text-lg font-medium ">
          <FaRegClock className="text-2xl " />
          Watch later
        </p>
        <p className="flex gap-6 items-center hover:bg-zinc-200 rounded-lg py-3 px-2  text-lg font-medium ">
          <FiThumbsUp className="text-2xl " />
          Liked Videos
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
