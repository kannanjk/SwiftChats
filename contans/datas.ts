import { BiSolidDashboard } from "react-icons/bi";
import {Bs4CircleFill, BsBellFill, BsChatHeart, BsDash, BsHouse } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { GoTable } from "react-icons/go";

export const sideBar = [
    {
        lable: "Home",
        href: '/',
        icon:BsHouse
    },
    {
        lable: "Dashboard",
        href: '/dashboard/1',
        icon:BiSolidDashboard
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
    }
]