import React from 'react';
import '../Styles/dashBoard.css'

import DashboardCard from '../Components/DashboardCard'
import FB from '../img/icon-facebook.svg';
import Insta from '../img/icon-instagram.svg'
import YT from '../img/icon-youtube.svg'
import Twitter from '../img/icon-twitter.svg'

const DashBoard = (props) => {
    const { changeThemeColor, colorTheme} = props;
    return(
        <>
            <div className={colorTheme ? "WhiteMode-Container" : "DarkMode-container"}>
                <div>
                    <h1 className="Logo h1">Social Media Dashboard</h1>
                    <p className={colorTheme ? "Logo white" : "Logo dark"}>Total Followers: 25</p>
                </div>
                <div className="switcher">
                    <button onClick={changeThemeColor}>Toggle</button>
                </div>
            </div>
            <div className="Cards-container">
                <div>
                    <DashboardCard
                        colorTheme={colorTheme}
                        name="rogeliosamuel621"
                        Followers="25"
                        icon={FB}
                        isOk="true"
                    />
                </div>
                <div>
                    <DashboardCard
                        colorTheme={colorTheme}
                        name="rogeliosamuel621"
                        Followers="25"
                        icon={Insta}
                        isOk="true"
                    />
                </div>
                <div>
                    <DashboardCard
                        colorTheme={colorTheme}
                        name="rogeliosamuel621"
                        Followers="25"
                        icon={Twitter}
                        isOk="true"
                    />
                </div>
                <div>
                    <DashboardCard
                        colorTheme={colorTheme}
                        name="rogeliosamuel621"
                        Followers="25"
                        icon={YT}
                        isOk="true"
                    />
                </div>
            </div>
        </>
    );
}

export default DashBoard;