import React from 'react'

interface SideBarItemProp {
    label: string
    href?: string
}

const SideBarItem: React.FC<SideBarItemProp> = ({ label, href }) => {
    return (
        <div className='p-3 flex flex-row items-center'>
            <p>{label}</p>
        </div>
    )
}

export default SideBarItem