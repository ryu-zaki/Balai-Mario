import React, { useRef } from "react";
import burgerMenuDark from '../assets/materials/burger-menu.png';
import burgerMenuLight from '../assets/materials/burger-menu-light.png';
import userIcon from '../assets/icons/jhonwell.jpg';
import crossIcon from '../assets/materials/cross-icon.png';
import cartDark from '../assets/materials/cart-dark.png';
import samplePro from '../assets/products/sample-product.jpg';
import cartLight from '../assets/materials/cart-light.png';
import chevronDown from '../assets/materials/chevron-down.png';

/* Navigations Images */
import homeDark from '../assets/materials/home-dark.png';
import aboutDark from '../assets/materials/info-dark.png';
import productsDark from '../assets/materials/products-dark.png';
import locationDark from '../assets/materials/location-dark.png';

import homeGray from '../assets/materials/home-gray.png';
import aboutGray from '../assets/materials/info-gray.png';
import productsGray from  '../assets/materials/products-gray.png';
import locationGray from '../assets/materials/location-gray.png';

import formDark from '../assets/materials/form-dark.png';
import userDark from '../assets/materials/user-dark.png';

import { useLocation, useNavigate, useParams } from "react-router";
import { scroller } from "react-scroll";
import { useUserinfo } from "../context/UserInfo";

const NavBar = () => {
    
    const navigate = useNavigate();
    const {isLogin} = useUserinfo();
    const resetScroll = () => {
        window.scrollTo({
            top: 0
        })
    }
    const [sideNavVisible, setSideNavVisible] = React.useState(false);
    const [navFixed, setNavFixed] = React.useState(false);
    const {pathname} = useLocation();
    const [cartVisible, setCartVisible] = React.useState(false);

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

    const CreateNav = (navName, offset, darkIcon, lightIcon) => {
        const backHome = useNavigate();
        const obj = {
            navName, darkIcon, lightIcon,
            navigate() {
                backHome('/');

                setTimeout(() => {
                    scroller.scrollTo(navName, {offset, smooth: true });
                }, 0)
                
            }
        }

        return obj;
    };

    const navigationBtns = [
        CreateNav("home",  -200, homeDark, homeGray),
        CreateNav("about us", -100, aboutDark, aboutGray),
        CreateNav("products", -100, productsDark, productsGray),
        CreateNav("location", -100, locationDark, locationGray)
    ];

    return (
        <>
         {sideNavVisible && <div onClick={() => setSideNavVisible(false)} className="fixed z-50 inset-0 bg-darkOverlay w-full h-full"></div>}

{/* Side Navigation */}
<div className={`fixed top-0 side-nav transition-all duration-700  z-50  overflow-y-auto bottom-0 bg-pureWhite left-0 p-5 px-8 flex flex-col gap-10 ${!sideNavVisible && "-translate-x-full"}`} >
              <img onClick={() => setSideNavVisible(false)} className="w-5 h-5 absolute top-3 right-3" src={crossIcon} alt="" />
              <h3 className="title-font text-darkBrown text-xl">Balai Mario</h3>

              <div className="border-b border-darkBrown border-b-2 pb-10">
                <h3 className="text-gray font-semibold">Main</h3>

                <nav className="nav-list">
                    <ul>

                        {
                            navigationBtns.map(({navName, lightIcon, navigate}) => {
                                
                                const handleNav = () => {
                                    navigate();
                                    setSideNavVisible(false);
                                }

                                return (
                                    <li className="relative">
                                    <div onClick={handleNav} className="absolute inset-0 cursor-pointer"></div>
                                     <img className="w-3" src={lightIcon} alt="" />
                                     <span className="capitalize">{navName}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
              </div>

             {
                !isLogin ? (
                    <div>
                <h3 className="text-gray font-semibold">Manage Account</h3>

                <nav className="nav-list">
                    <ul>
                        <li className="relative w-fit">
                            <div onClick={() => navigate('/login')} className="absolute inset-0"></div>
                            <img src={userDark} alt="" />
                            <span>Login Account</span>
                        </li>

                        <li className="relative w-fit">
                            <div onClick={() => navigate('/register')} className="absolute inset-0"></div>
                            <img src={formDark} alt="" />
                            <span>Register Account</span>
                        </li>
                    </ul>
                </nav>
              </div>
                ) : (
                    <div className="flex flex-col gap-9 text-darkBrown xxs:gap-14">
              <h2 className="text-sm font-semibold">Your Account</h2>
              <div className="flex relative flex-col gap-8 user-icon-box items-center dark-shadow pt-8 py-5 px-4 rounded-xl px-5 xxs:pt-9">
               
                <div className="absolute top-0 left-6 w-10 -translate-y-1/2 aspect-1 flex items-center justify-center user-icon">
                    <img className="w-full h-full rounded-full" src={userIcon} alt="" />
                </div>

                <div className="text-left w-full">
                    <h3 className="font-semibold text-wrap">Jhonwell Espanola</h3>
                    <p className="text-xs text-gray font-semibold">Balai Mario's Customer</p>
                </div>
              </div>
              </div>
                )
             }
              
              
             

            </div>
        
        <div ref={navBarRef} className={`${!isProductPage || navFixed ? "text-darkBrown" : "text-pureWhite"} ${isProductPage ? "relative bg-lightOverlay md:sticky md:top-0 xl:h-20" : "relative xl:h-24"} z-40 h-20 w-full`}>
        <div className={`w-full md:z-50 ${!isProductPage || navFixed ? "bg-pureWhite" : "bg-transparent"} ${(navFixed && !isProductPage) ? "fixed top-0 left-0 dark-shadow nav-bar nav-dark-shadow" : "relative"}`}>
        <div className={`px-7 xl:px-14 flex w-full items-center justify-between z-20 ${navFixed || isProductPage ? "py-4" : "py-4 md:py-6 xl:py-7"}`} >
            <h3 onClick={() => {navigate('/');resetScroll() }} className={`cursor-pointer ${navFixed ? "text-xl" : "text-2xl"} title-font`}>Balai Mario</h3>

            <nav>
            <ul className={`hidden nav-horizontal py-2 relative  md:flex xl:mr-64  ${navFixed ? "text-sm" : "text-sm xl:text-base"}`}>
                 
                 {
                    navigationBtns.map(({navName, navigate}, index) => {
                        return(<li key={index} className="relative">
                            <div onClick={navigate} className="absolute inset-0 cursor-pointer z-10"></div>
                            <span>{navName}</span>
                        </li>)
                    })
                 }

                <div className="nav-active-effect"></div>
            </ul>
            </nav>
            
            {
                isLogin ? 
                (
                  <div className="hidden md:flex gap-10 items-center 2xl:gap-12">
                    <CartIcon isProductPage={isProductPage} cartVisible={cartVisible} setCartVisible={setCartVisible} />
                    
                    <div className="w-10 relative z-10 aspect-1 flex items-center justify-center user-icon md:w-8 2xl:w-10">
                      <div className="absolute inset-0 z-30 cursor-pointer"></div>

                    <img className="w-full h-full rounded-full" src={userIcon} alt="" />

                    <div className="bg-pureWhite dark-shadow p-1 rounded-full absolute z-20 -bottom-1 -right-1 2xl:-bottom-1 2xl:-right-1">
                      <img className="w-2 2xl:w-3" src={chevronDown} alt="" />
                    </div>
                    </div>

                  </div>
                ) : (

                    <div className={`hidden gap-6 text-xs md:flex xl:relative xl:z-10  ${navFixed ? "text-xs" : "text-xs xl:text-sm"}`}>
                <button onClick={() => navigate('/register')} className={`border-2 ${!isProductPage || navFixed ? "border-darkBrown" : "border-pureWhite"} px-7 p-2 rounded-full`}>Register</button>
                <button onClick={() => navigate('/login')} className={`${!isProductPage || navFixed ? "bg-darkBrown text-pureWhite" : "bg-pureWhite text-darkBrown"}  px-8 p-2 rounded-full`}>Login</button>
            </div>

                )
                
            }
            

            <MobileButtons setCartVisible={setCartVisible} style={"relative gap-5"} isProductPage={isProductPage} setSideNavVisible={setSideNavVisible} />
            
            <CartModal setCartVisible={setCartVisible} cartVisible={cartVisible}/>
        </div>
        </div>
        </div>
        </>
    )
}

const MobileButtons = ({setSideNavVisible, style, setCartVisible, isProductPage}) => {

    return (
      <div className={`${style} flex items-center md:hidden`}>

        <CartIcon isProductPage={isProductPage} setCartVisible={setCartVisible} display={"md:hidden"} />

         <img onClick={() => setSideNavVisible(true)} draggable="false" className={`transition-all duration-500 relative select-none md:hidden`} src={isProductPage ? burgerMenuLight : burgerMenuDark} />
     </div>
    )
}

const CartIcon = ({display, setCartVisible, isProductPage}) => {

    return (
        <div className={`${display} w-6 relative cart-icon 2xl:w-7`}>
             <div onClick={() => setCartVisible(true)} className="absolute inset-0 cursor-pointer z-10"></div>
             <span className="absolute rounded-full -top-1 -right-3  bg-lightOrange text-pureWhite px-2">1</span>
              <img className="w-full" src={isProductPage ? cartLight : cartDark} alt="" />
        </div>
    )
}

const CartModal = ({cartVisible, setCartVisible}) => {

    const DishBox = () => {
        return (
            <div className={`flex justify-between items-center border-b border-lightOrange pb-3`}>
                <div className="flex items-center gap-3">
                    <img className="w-14 aspect-1 rounded-xl object-cover" draggable={false} src={samplePro} alt="" />
                    
                    <div className="text-darkBrown font-semibold">
                        <span className="text-gray text-xs block xs:text-sm">Starter</span>
                        <h3 className="text-sm xs:text-base">Special Bulalo</h3>
                        <p className="text-lightOrange text-xs xs:text-sm">$200.00</p>
                    </div>
                </div>

                <span className="font-bold">x2</span>
            </div>
        )
    }

    return (
        <div className={`${!cartVisible && "scale-0"} transition-all duration-700 p-6 absolute ease-in-out origin-top-right rounded-xl bg-ash w-11/12 dark-shadow flex flex-col -bottom-3 translate-y-full translate-x-1/2 right-1/2 xs:w-96 xs:p-8 xs:translate-x-0 xs:right-5 xs:-bottom-2 md:right-24 xl:right-32`}>
          <img onClick={() => setCartVisible(false)} draggable={false} className="cursor-pointer w-5 absolute top-3 right-3 xs:top-5 xs:right-5 xl:w-6" src={crossIcon} alt="" />
          <h2 className="text-2xl font-semibold xs:text-3xl">Your Dish</h2>
          <div className="flex flex-col gap-4 my-5">
             <DishBox />
             <DishBox />
             <DishBox />
          </div>
          <span className="self-end text-sm underline text-lightOrange">View All</span>
          <button className="block mt-3 text-sm text-pureWhite bg-lightOrange w-full text-center py-3 rounded-lg xs:py-4">CHECKOUT</button>
        </div>
    )
}

export default NavBar;