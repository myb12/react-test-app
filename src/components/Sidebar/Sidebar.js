import React from 'react';
import './Sidebar.css'

const Sidebar = ({ openSidebar, handleSidebar, sidebarOpen, sidebarClose }) => {

    return (
        <div className={openSidebar ? 'sidebar-container sidebar-visible' : 'sidebar-container'} onMouseEnter={sidebarOpen}
            onMouseLeave={sidebarClose}>
            <div className="sidebar">
                <div className="icon-close" onClick={handleSidebar}>
                    <i className={openSidebar ? 'far fa-times-circle' : 'hidden'}></i>
                </div>
                <div className={!openSidebar ? 'sidebar__link sidear__active__link collapse' : 'sidebar__link sidear__active__link'}>
                    <i className="fas fa-home"></i>
                    <a href="/#">Dashboard</a>
                </div>
                <div className={!openSidebar ? 'sidebar__link collapse' : 'sidebar__link'}>
                    <i className="fas fa-comment"></i>
                    <a href="/#">Conversations</a>
                </div>
                <div className={!openSidebar ? 'sidebar__link collapse' : 'sidebar__link'}>
                    <i className="fas fa-users"></i>
                    <a href="/#">Visitors</a>
                </div>
                <div className={!openSidebar ? 'sidebar__link collapse' : 'sidebar__link'}>
                    <i className="fas fa-chart-pie"></i>
                    <a href="/#">Analytics</a>
                </div>
                <div className={!openSidebar ? 'sidebar__link collapse' : 'sidebar__link'}>
                    <i className="fas fa-handshake"></i>
                    <a href="/#">Contracts</a>
                </div>
                <div className={!openSidebar ? 'sidebar__link collapse' : 'sidebar__link'}>
                    <i className="far fa-chart-bar"></i>
                    <a href="/#">Reports</a>
                </div>
                <div className={!openSidebar ? 'sidebar__link collapse' : 'sidebar__link'}>
                    <i className="fas fa-history"></i>
                    <a href="/#">Activity Logs</a>
                </div>
                <div className={!openSidebar ? 'sidebar__link collapse' : 'sidebar__link'}>
                    <i className="fas fa-globe"></i>
                    <a href="/#">English</a>
                </div>
                <div className={!openSidebar ? 'sidebar__link collapse' : 'sidebar__link'}>
                    <i className="fas fa-bell"></i>
                    <a href="/#">Notifications</a>
                </div>
                <div className={!openSidebar ? 'sidebar__link collapse' : 'sidebar__link'}>
                    <i className="fas fa-book"></i>
                    <a href="/#">Documentation</a>
                </div>
                <div className={!openSidebar ? 'sidebar__link collapse' : 'sidebar__link'}>
                    <i className="fas fa-question-circle"></i>
                    <a href="/#">Support Center</a>
                </div>
                <div className={!openSidebar ? 'sidebar__link collapse' : 'sidebar__link'}>
                    <i className="fas fa-power-off"></i>
                    <a href="/#">Log out</a>
                </div>
            </div>
        </div >
    );
};

export default Sidebar;