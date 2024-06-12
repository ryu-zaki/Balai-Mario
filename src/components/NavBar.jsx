import React, { useRef } from "react";
import burgerMenuDark from '../assets/materials/burger-menu.png';
import burgerMenuLight from '../assets/materials/burger-menu-light.png';
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
import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-scroll";

const NavBar = () => {
    
    const navigate = useNavigate();
    const resetScroll = () => {
        window.scrollTo({
            top: 0
        })
    }
    const [sideNavVisible, setSideNavVisible] = React.useState(false);
    const [navFixed, setNavFixed] = React.useState(false);
    const {pathname} = useLocation();

    const navBarRef = useRef(null);
    
    const [isProductPage, setIsProductPage] = React.useState(pathname === "/products");
    const params = useParams();


    React.useEffect(() => {

        setIsProductPage(pathname === "/products" || !!(params.category) && !(params.productId));
    
    }, [pathname])

    React.useEffect(() => {
       
        const observer = new IntersectionObserver((entries) => {

         entries.forEach(entry => {
     
            if (!entry.isIntersecting) {
                setNavFixed(true);
            } else {
                setNavFixed(false);
            }
         })
         

        }, {})

        observer.observe(navBarRef.current);

    }, []);

    

    return (
        <>
        <div className="bg-pureWhit hidden z-30 fixed p-3 rounded-full top-6 right-6 dark-shadow">
            <div className="absolute inset-0 cursor-pointer"></div>
            <img className="w-6" src={burgerMenuDark} alt="" />
        </div>
        {sideNavVisible && <div onClick={() => setSideNavVisible(false)} className="fixed z-30 inset-0 bg-darkOverlay w-full h-full"></div>}
        
        <div ref={navBarRef} className={`${!isProductPage || navFixed ? "text-darkBrown" : "text-pureWhite"} ${isProductPage ? "relative px-7 xl:px-14 bg-lightOverlay md:sticky md:top-0 xl:h-20" : "relative xl:h-24"} z-40 md:h-20 w-full`}>
        <div className={`w-full md:z-50 ${!isProductPage || navFixed ? "md:bg-pureWhite" : "bg-transparent"} ${(navFixed && !isProductPage) && "md:fixed md:top-0 md:left-0 dark-shadow md:px-7 xl:px-14 nav-bar nav-dark-shadow"}`}>
        <div className={`flex w-full items-center justify-between z-20 ${navFixed || isProductPage ? "py-4" : "py-4 md:py-6 xl:py-7"}`} >
            <h3 onClick={() => {navigate('/');resetScroll() }} className={`cursor-pointer ${navFixed ? "text-xl" : "text-2xl"} title-font`}>Balai Mario</h3>

            <nav>
            <ul className={`hidden nav-horizontal py-2 relative  md:flex xl:mr-64  ${navFixed ? "text-sm" : "text-sm xl:text-base"}`}>
                <li className="active">
                    <Link 
                      offset={-200} 
                      to="hero"
                      smooth={true}
                    >home</Link>
                </li>

                <li>
                    <Link 
                      offset={-100}
                      to="about-us"
                      smooth={true}
                    >about us</Link>
                </li>   

                <li>
                    <Link 
                      offset={-100}
                      to="products-preview"
                      smooth={true}
                    >products</Link>
                </li>

                <li>
                    <Link 
                      offset={-100}
                      to="location"
                      smooth={true}
                    >location</Link>
                </li>

                <div className="nav-active-effect"></div>
            </ul>
            </nav>
            

            <div className={`hidden gap-6 text-xs md:flex xl:relative xl:z-10  ${navFixed ? "text-xs" : "text-xs xl:text-sm"}`}>
                <button onClick={() => navigate('/register')} className={`border-2 ${!isProductPage || navFixed ? "border-darkBrown" : "border-pureWhite"} px-7 p-2 rounded-full`}>Register</button>
                <button onClick={() => navigate('/login')} className={`${!isProductPage || navFixed ? "bg-darkBrown text-pureWhite" : "bg-pureWhite text-darkBrown"}  px-8 p-2 rounded-full`}>Login</button>
            </div>

            <img onClick={() => setSideNavVisible(true)} draggable="false" className={`${sideNavVisible && "scale-0 opacity-0"} transition-all duration-500 relative select-none md:hidden`} src={isProductPage ? burgerMenuLight : burgerMenuDark} />


            {/* Side Navigation */}
            <div className={`fixed top-0 side-nav transition-all duration-700  z-40  overflow-y-auto bottom-0 bg-pureWhite left-0 p-5 px-8 flex flex-col gap-10 ${!sideNavVisible && "-translate-x-full"}`} >
              <img onClick={() => setSideNavVisible(false)} className="w-5 h-5 absolute top-3 right-3" src={crossIcon} alt="" />
              <h3 className="title-font text-darkBrown text-xl">Balai Mario</h3>

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
        </div>
        </div>
        </>
    )
}

export default NavBar;