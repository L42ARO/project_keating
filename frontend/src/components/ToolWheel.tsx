import React, { ReactNode, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { BsFillCalendarWeekFill, BsFillClockFill } from "react-icons/bs";
import { GoTasklist } from "react-icons/go";
import { RiDashboardFill, RiMenu5Fill, RiSettings5Fill } from "react-icons/ri";

import {
  Link
} from "react-router-dom";
import "../theme/tailwind.css";

const ToolWheel: React.FC<{}> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const changeOpen = () => setOpen(!open);
  const posEval = (posX?:number, posY?: number) => {
    var classPos="";
    var pos;
    var smSize;
    var factor=1.7;
    if(posX){
      pos = Math.abs(posX)
      classPos+="right-[-"+pos.toString()+"rem] "
      smSize=Math.round(pos*factor);
      classPos+="sm:right-[-"+smSize.toString()+"rem] "
      classPos+="sm-h:right-[-"+smSize.toString()+"rem] "
    }
    if(posY){
      var side = (posY<0) ? "bottom":"top"
      pos = Math.abs(posY)
      classPos+=side+"-[-"+pos.toString()+"rem] "
      smSize=Math.round(pos*factor);
      classPos+="sm:"+side+"-[-"+smSize.toString()+"rem] "
      classPos+="sm-h:"+side+"-[-"+smSize.toString()+"rem] "
    }
    const finalClass:string = classPos+"scale-100";
    return finalClass;
  };
  return (
    <React.Fragment>
      {open&&<div
        className="z-[999] fixed w-full h-full backdrop-blur left-0 top-0"
        onClick={()=>{setOpen(false)}}
      >
        <div className="w-full h-full bg-gray-500 opacity-50"></div>
      </div>}
      <div className={open ? "w-12 aspect-square relative" : "scale-0"}></div>
      <div className={"z-[1000] h-full " + (open ? "toolwheel" : "w-auto")}>
        <div className="relative h-12 aspect-square">
          <MainIcon
            icon={
              open ? <AiOutlineClose size="20" /> : <RiMenu5Fill size="20" />
            }
            onClick={changeOpen}
          />
          <SidebarIcon
            text="Dashboard"
            icon={<RiDashboardFill size="20" />}
            pos={open?"xs-a:top-[-6.75rem] sm-a:top-[-9rem] top-[-18rem]":"icons-hide"}
            // pos={open ? posEval(undefined,9): "icons-hide"}
            onClick={changeOpen}
          />
          <SidebarIcon
            text="Neotasks"
            icon={<GoTasklist size="20" />}
            pos={open?"xs-a:right-[-4.125rem] sm-a:right-[-5.5rem] right-[-11rem] xs-a:top-[-4.125rem] sm-a:top-[-5.5rem] top-[-11rem]":"icons-hide"}
            // pos={open ? posEval(5.5,5.5): "icons-hide"}
            onClick={changeOpen}
          />
          <SidebarIcon
            text="Clocks"
            icon={<BsFillClockFill size="20" />}
            pos={open ? "xs-a:right-[-6.75rem] sm-a:right-[-9rem] right-[-18rem]": "icons-hide"}
            // pos={open?posEval(9):"icons-hide"}
            onClick={changeOpen}
          />
          <SidebarIcon
            text="Calendar"
            icon={<BsFillCalendarWeekFill size="20" />}
            pos={open ? "xs-a:right-[-4.125rem] sm-a:right-[-5.5rem] right-[-11rem] xs-a:bottom-[-4.125rem] sm-a:bottom-[-5.5rem] bottom-[-11rem]": "icons-hide"}
            // pos={open?posEval(5.5,-5.5): "icons-hide"}
            onClick={changeOpen}
          />
          <SidebarIcon
            text="Settings"
            icon={<RiSettings5Fill size="20" />}
            pos={open ? "xs-a:bottom-[-6.75rem] sm-a:bottom-[-9rem] bottom-[-18rem]":"scale-0"}
            // pos={open?posEval(undefined,-9):"icons-hide"}
            onClick={changeOpen}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
const MainIcon: React.FC<{
  icon: ReactNode;
  text?: string;
  onClick: () => void;
}> = ({ icon, text = "menu", onClick }) => (
  <div
    className="wheelbar-icon text-theme group h-12"
    onClick={(e) => {
      onClick();
    }}
  >
    {icon}
    {/* <span className="sidebar-tooltip scale-0 group-hover:scale-100">{text}</span> */}
  </div>
);
const SidebarIcon: React.FC<{
  icon: ReactNode;
  text?: string;
  pos?: string;
  bgSize?:string;
  onClick: () => void;
}> = ({ icon, text = "hello", pos, onClick, bgSize="sm-a:h-12 h-16"}) => (
  <Link
    to={"/" + text}
    className={"wheelbar-icon text-theme "+bgSize+" " + pos}
    onClick={(e) => {
      onClick();
    }}
  >
    {icon}
    <span className="sidebar-tooltip">{text}</span>
  </Link>
);

export default ToolWheel;
export { MainIcon, SidebarIcon };

