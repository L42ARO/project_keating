import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { useLocation } from "react-router";
import ToolWheel, { SidebarIcon } from "./ToolWheel";

const TopBar: React.FC = () => {
  const location = useLocation();
  const [newNT, setNewNT] = useState<boolean>(false);
  useEffect(() => {
    if (location.pathname === "/Add-Neotask") setNewNT(true);
    else setNewNT(false);
  }, [location]);
  return (
    <div className="z-[1000] flex w-full h-16 top-0 left-0">
      <div className="w-full h-full p-3 sm:p-4 flex z-[9999]">
        <ToolWheel />
        <div className="grow flex justify-center items-center text-lg sm:text-2xl font-mono font-bold text-theme">
          {location.pathname.slice(1).toUpperCase()}
        </div>
        <div className="relative w-12 aspect-square">
          <SidebarIcon
            text={newNT ? "Clocks" : "Add-Neotask"}
            icon={
              newNT ? <AiOutlineClose size="20" /> : <AiOutlinePlus size="20" />
            }
            bgSize="h-12"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
