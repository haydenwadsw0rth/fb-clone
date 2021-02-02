import userEvent from '@testing-library/user-event';
import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src="https://i.pinimg.com/originals/20/a6/e0/20a6e0b66414578e9873dc536797d19f.jpg" 
            title='John Doe' />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Infomation Center" />
            <SidebarRow Icon={EmojiFlagIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StoreFrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace' />

        </div>
    )
}

export default Sidebar
