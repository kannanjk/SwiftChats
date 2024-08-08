import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}

const Session: React.FC<LayoutProps> = ({ children}) => {
    return (
        <div className='p-6'>
            {children}
        </div>
    )
}

export default Session