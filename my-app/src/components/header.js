import React from "react"
import logo from "../images/logo.png"
const Header = () => {
    const today =new Date().toString().slice(0,10)
    return (
    <header>
    <div className="logo-container">
        <img src={logo} alt="logo" /><div className="heading">
        DealFinder
            </div>

    </div>
    <div className="text-container">
        <p>{today}</p>
    </div>
    </header>
    )
}
export default Header