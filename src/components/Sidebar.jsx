import React from 'react'


const SideBtn = ({ one, url, imgurl }) => {
    return (
        <div className="my-4 bg-white">
            <img src={imgurl} height={'35px'} />
            <a href={url} className="btn fw-semibold">{one}</a>
        </div>
    )
}
const Sidebar = () => {
    return (
        <>
            <div className="my-5 text-white">
                <SideBtn one={"Dashboard"} url={"/"} imgurl={"https://cdn-icons-png.flaticon.com/512/1828/1828791.png"} />
                <SideBtn one={"Electricity"} url={"/electricity"} imgurl={"https://cdn-icons-png.flaticon.com/512/2024/2024074.png "} />
                <SideBtn one={"Water"} url={"/"} imgurl={"https://c.animaapp.com/rKRROlJn/img/blur@2x.png"} />
                <SideBtn one={"LPG"} url={"/"} imgurl={"https://c.animaapp.com/rKRROlJn/img/fire@2x.png"} />
            </div >

            <div className="my-3 text-white dropdown position-fixed bottom-0">
                <SideBtn one={"Settings"} url={"/electricity"} imgurl={"https://c.animaapp.com/rKRROlJn/img/settings@2x.png"} />
                <SideBtn one={"Logout"} url={"/electricity"} imgurl={"https://c.animaapp.com/rKRROlJn/img/logout@2x.png"} />
            </div>
        </>
    )
}

export default Sidebar