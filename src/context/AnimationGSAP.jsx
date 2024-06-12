import React, { createContext, useContext, useRef } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { useLocation } from 'react-router';

const ComponentContext = createContext(null);

const AnimationGSAP = ({children}) => {
    
    gsap.registerPlugin(ScrollTrigger);
    const matchMedia = gsap.matchMedia();

    const productSecMarkerRef = useRef(null);
    const {pathname} = useLocation();
    const bgTextRef = useRef(null);
    const bgTextBottomRef = useRef(null);
    const allProductsTitleSticky = useRef(null);
    const footerRef = useRef(null);
    

    React.useEffect(() => {

        if (!!productSecMarkerRef.current) {
            gsap.to(productSecMarkerRef.current, {
                scrollTrigger: {
                   trigger: productSecMarkerRef.current,
                   start: '-50% 10%',
                   end: '-50% 10%',
                   scrub: 2
                },
                
                scale: 0
            })
        }
        
        
        if (!!bgTextRef.current) {
            gsap.to(bgTextRef.current, {

                scrollTrigger: {
                    trigger: bgTextRef.current,
                    start: '0% 80%',
                    end: "100% 40%",
                    scrub: 1,
                },
                
                translateX: '0',
            })
        }
        
        if (!!bgTextBottomRef.current) {

            gsap.to(bgTextBottomRef.current, {
                scrollTrigger: {
                    trigger: bgTextBottomRef.current,
                    start: '0% 80%',
                    end: "100% 40%",
                    scrub: 1,
                },
                translateX: '0'
            })

        }

        
        matchMedia.add("(min-width: 970px)", () => {

            gsap.to(allProductsTitleSticky.current, {
                scrollTrigger: {
                    start: 'top top',
                    end: 'bottom 0%',
                    trigger: allProductsTitleSticky.current,
                    scrub: 2,
                },
                
                scale: .4,
                background: '#f8f8f8',
                border: "1px solid #2e2517"
            })

        })
        
    }, [pathname]);

    return(
        <ComponentContext.Provider 
        value={{productSecMarkerRef, bgTextRef, bgTextBottomRef, allProductsTitleSticky, footerRef}}
        >

          {children}
        </ComponentContext.Provider>
        
    )
}

export const useAnimationGSAP = () => {
    return useContext(ComponentContext);
}


export default AnimationGSAP;