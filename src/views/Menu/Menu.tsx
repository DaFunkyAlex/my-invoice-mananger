import React from 'react';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HelpIcon from '@mui/icons-material/Help';
import './Menu.css'

const Menu = () => {
    return (
        <div className='Menu'>         
            <div><HomeIcon color="primary"></HomeIcon></div>
            <div><AccountCircleIcon color="primary"></AccountCircleIcon></div>
            <div><ReceiptIcon color="primary"></ReceiptIcon></div>
            <div><HelpIcon color="primary"></HelpIcon></div>
        </div>        
    )

}

export {Menu}