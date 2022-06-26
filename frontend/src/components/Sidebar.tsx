import React from 'react'
import "../theme/tailwind.css"
//NOTE: Pending to install and import logos
const Sidebar: React.FC = ()=>{
    return(
        <div className=''>
            <SidebarIcon icon={<FaFire size="28"/>}/>
            <SidebarIcon icon={<BsPlus size="32"/>}/>
            <SidebarIcon icon={<BsFillLightningFill size="20"/>}/>

        </div>
    );
}
const SidebarIcon : React.FC<{icon: React.FC}>= props=>{
    return (
        <div>
            {props.icon}
        </div>
    );
}
export default Sidebar;