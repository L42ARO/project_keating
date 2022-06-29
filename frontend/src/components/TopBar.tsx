import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import ToolWheel, { SidebarIcon } from "./ToolWheel";

const TopBar: React.FC = () => {
    const location = useLocation();
    const [newNT, setNewNT] = useState<boolean>(false);
    useEffect(()=>{
        if(location.pathname==="/Add-Neotask")setNewNT(true)
        else setNewNT(false)
    } ,[location])
  return (
    <div className="z-[1000] flex w-full h-16 top-0 left-0 bg-green-500 p-2">
      <ToolWheel />
      <div className="grow flex justify-center items-end text-2xl font-mono font-bold dark:text-gray-800"></div>
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
  );
};

export default TopBar;
