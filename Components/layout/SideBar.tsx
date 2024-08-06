import React from 'react'
import SideBarItem from './SideBarItem'
import { sideBar } from '@/contans/datas'

function SideBar() {

    return (
        <div className='hidden  md:block w-[7%]'>
            <div className="h-full flex justify-center overflow-x-scroll no-scrollbar ">
                <div className=" ">
                    {
                        sideBar.map((item: any, ind: number) => (
                            <SideBarItem 
                            key={ind} 
                            label={item.lable}
                            href={item.href}
                            icon={item.icon}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar