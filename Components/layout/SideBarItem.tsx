import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { IconType } from 'react-icons'

interface SideBarItemProp {
    label: string
    href?: string
    icon: IconType
    onClick?: () => void
}

const SideBarItem: React.FC<SideBarItemProp> = ({ label, href, icon: Icon, onClick }) => {
    const router = useRouter()
    const handleClick = useCallback(() => {
        if (onClick) {
            return onClick()
          }
       else if (href) {
            router.push(href)
        }
    }, [href, onClick, router])
    return (
        <div
            onClick={handleClick}
            className='p-5 flex flex-row items-center cursor-pointer'>
            <Icon size={20} />
        </div>
    )
}

export default SideBarItem