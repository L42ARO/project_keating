import { IonList } from "@ionic/react";
import React, { ReactNode } from "react";
import '../theme/tailwind.css';
const Sidebar: React.FC = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen 2-16 m-0 
        flex flex-col
        bg-gray-900 text-white shadow"
    >
      <i>A</i>
      <i>B</i>
      <i>C</i>
      <i>D</i>
      <i>E</i>
    </div>
  );
};
const SidebarIcon: React.FC <{icon:ReactNode}>=props=>(
    <div className='sidebar-icon'>
        {props.icon}
    </div>
);
export default Sidebar;
