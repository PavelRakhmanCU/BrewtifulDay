import { GlobalContext } from "../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";
const NavigationMenu = ()=>{
    const {toggleActivator, setToggleActivator}=useContext(GlobalContext);
    const LinkData=  [
        {route:"/",text:"Home"},
        {route:"/menu", text:"Menu"},
        {route:"/register", text:"Register"},
        {route:"/contact", text:"Contact Us"},
        {route:"/about", text:"About Us"}
    ]
    let location=useLocation();
    useEffect(()=>{
        setToggleActivator(false);
    },[location.pathname])
    return(
        <div className={`navigation-menu ${toggleActivator ? "active" : ""}`}>
            <ul>
                {LinkData.map((link,index)=>(<NavLink key={index} route={link.route} text={link.text} index={index}></NavLink>))}
            </ul>
        </div>
    )
}
export default NavigationMenu;