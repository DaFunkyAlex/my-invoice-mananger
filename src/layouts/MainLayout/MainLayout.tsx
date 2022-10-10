import React from 'react';
import { Menu } from '../../views/Menu';
import './MainLayout.css'

const MainLayout = ({ children }: { children: any | null }): JSX.Element => {
    
    return (
        <div className='MainLayout'>            
            <main>{children}</main>
            <Menu></Menu>
        </div>

    )
}

export {MainLayout}
