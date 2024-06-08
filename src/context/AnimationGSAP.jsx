import React, { createContext, useContext, useRef } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { useLocation } from 'react-router';

const ComponentContext = createContext(null);

const AnimationGSAP = ({children}) => {
    
    gsap.registerPlugin(ScrollTrigger);

    const productSecMarkerRef = useRef(null);
    const {pathname} = useLocation();
    const bgTextRef = useRef(null);
    const bgTextBottomRef = useRef(null);

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

        
        
    }, [pathname]);

    return(
        <ComponentContext.Provider 
        value={{productSecMarkerRef, bgTextRef, bgTextBottomRef}}
        >

          {children}
        </ComponentContext.Provider>
        
    )
}

export const useAnimationGSAP = () => {
    return useContext(ComponentContext);
}


export default AnimationGSAP;