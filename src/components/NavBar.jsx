import React from "react";
import burgerMenuIcon from '../assets/materials/burger-menu.png';
import crossIcon from '../assets/materials/cross-icon.png';

/* Navigations Images */
import homeDark from '../assets/materials/home-dark.png';
import aboutDark from '../assets/materials/info-dark.png'
import contactDark from '../assets/materials/contact-dark.png'
import servicesDark from '../assets/materials/services-dark.png'
import formDark from '../assets/materials/form-dark.png';
import userDark from '../assets/materials/user-dark.png';

import homeGray from '../assets/materials/home-gray.png';
import aboutGray from '../assets/materials/info-gray.png';
import contactGray from '../assets/materials/contact-gray.png';
import servicesGray from '../assets/materials/services-gray.png';

const NavBar = () => {

    const [sideNavVisible, setSideNavVisible] = React.useState(false);



    return (
        <>
        {sideNavVisible && <div onClick={() => setSideNavVisible(false)} className="fixed z-30 inset-0 bg-darkOverlay w-full h-full"></div>}

        <div className="flex w-full items-center justify-between py-5 md:py-6 xl:py-8" >
            <h3 className="text-2xl text-darkBrown title-font">Balai Mario</h3>

            <nav>
            <ul className="hidden nav-horizontal py-2 relative text-sm md:flex xl:mr-64 xl:text-base">
                <li className="active"><a href="/">home</a></li>
                <li><a href="/">about us</a></li>
                <li><a href="/">contact</a></li>
                <li><a href="/">services</a></li>

                <div className="nav-active-effect"></div>
            </ul>
            </nav>
            

            <div className="hidden gap-6 text-xs md:flex xl:relative xl:z-10 xl:text-sm">
                <button className="border-2 border-darkBrown text-darkBrown px-7 p-2 rounded-full">Register</button>
                <button className="bg-darkBrown text-pureWhite px-8 p-2 rounded-full">Login</button>
            </div>

            <img onClick={() => setSideNavVisible(true)} draggable="false" className="select-none md:hidden" src={burgerMenuIcon} />


            {/* Side Navigation */}
            <div className={`fixed top-0 side-nav transition-all duration-700  z-30  overflow-y-auto bottom-0 bg-pureWhite left-0 p-5 px-8 flex flex-col gap-10 ${!sideNavVisible && "-translate-x-full"}`} >
              <img onClick={() => setSideNavVisible(false)} className="w-5 h-5 absolute top-3 right-3" src={crossIcon} alt="" />
              <h3 className="text-darkBrown title-font text-xl">Balai Mario</h3>

              <div className="border-b border-darkBrown border-b-2 pb-10">
                <h3 className="text-gray font-semibold">Main</h3>

                <nav className="nav-list">
                    <ul>
                        <li className="active">
                            <img src={homeDark} alt="" />
                            <span>Home</span>
                        </li>

                        <li>
                            <img src={aboutGray} alt="" />
                            <span>About Us</span>
                        </li>

                        <li>
                            <img src={contactGray} alt="" />
                            <span>Contact Us</span>
                        </li>

                        <li>
                            <img src={servicesGray} alt="" />
                            <span>Services</span>
                        </li>
                    </ul>
                </nav>
              </div>

              <div>
                <h3 className="text-gray font-semibold">Manage Account</h3>

                <nav className="nav-list">
                    <ul>
                        <li>
                            <img src={userDark} alt="" />
                            <span>Login Account</span>
                        </li>

                        <li>
                            <img src={formDark} alt="" />
                            <span>Register Account</span>
                        </li>
                    </ul>
                </nav>
              </div>

            </div>
        </div>
        </>
    )
}

export default NavBar;