import {
  IonContent,
  IonHeader,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { FaFire } from "react-icons/fa";
import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import React, { ReactNode } from "react";
import "../theme/tailwind.css";
import "../theme/variables.css";
import "../theme/menu.module.css";
const Sidebar: React.FC = () => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar> Header </IonToolbar>
      </IonHeader>
      <IonContent>
          <div
            className="fixed top-0 left-0 h-screen w-16 m-0 
            flex flex-col
            dark:bg-gray-900 dark:text-white shadow"
          >
            <SidebarIcon icon={<FaFire size="28" />} />
            <SidebarIcon icon={<BsPlus size="32" />} />
            <SidebarIcon icon={<BsFillLightningFill size="20" />} />
          </div>
      </IonContent>
    </React.Fragment>

  );
};
const SidebarIcon: React.FC<{
  icon: ReactNode;
  text?: string;
}> = ({ icon, text = "hello" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
export default Sidebar;
