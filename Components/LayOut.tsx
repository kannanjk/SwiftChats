import React, { Children } from 'react'
import SideBar from './layout/SideBar'

interface LayoutProps {
    children: React.ReactNode
}

const LayOut: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='h-screen bg-green-300 '>
            <div className="flex h-full">
                <SideBar />
                <div className='bg-purple-300 w-full md:w-[93%] border-x-[1px] '>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayOut