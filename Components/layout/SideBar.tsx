import React from 'react'
import SideBarItem from './SideBarItem'
import { sideBar } from '@/contans/datas'

function SideBar() {

    return (
        <div className='hidden md:block w-[7%]'>
            <div className="flex items-center">
                <div className=" ">
                    {
                        sideBar.map((item: any, ind: number) => (
                            <SideBarItem key={ind} label={item.lable}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar