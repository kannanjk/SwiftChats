import { AiFillPushpin } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import {Bs4CircleFill, BsBellFill, BsChatHeart, BsDash, BsHouse } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { GiHalberd } from "react-icons/gi";
import { GoTable } from "react-icons/go";
import { SiUniqlo } from "react-icons/si";

export const sideBar = [
    
    {
        lable: "Dashboard",
        href: '/dashboard/1',
        icon:BsHouse
    },
    {
        lable: "Chat",
        href: `/chat/2`,
        icon:BsChatHeart
    },
    {
        lable: "Contacts",
        href: `/contacts/3`,
        icon:BsBellFill
    }
    ,
    {
        lable: "Campaigns",
        href: `/campaigns/4`,
        icon:FaUser
    }
    ,
    {
        lable: "Automation",
        href: `/automation/5`,
        icon:GoTable
    }
    ,
    {
        lable: "Team",
        href: `/team/6`,
        icon:Bs4CircleFill
    },
    {
        lable: "Chat",
        href: `/templates/2`,
        icon:BsChatHeart
    },
    {
        lable: "Contacts",
        href: `/settings/3`,
        icon:BsBellFill
    }
    ,
    {
        lable: "Campaigns",
        href: `/subscription/4`,
        icon:GiHalberd
    },
    {
        lable: "Home",
        href: '/',
        icon:SiUniqlo
    },
    {
        lable: "Automation",
        href: `/tickets/5`,
        icon:GoTable
    }
    ,
    {
        lable: "Team",
        href: `/apiKeys/6`,
        icon:AiFillPushpin
    },
]