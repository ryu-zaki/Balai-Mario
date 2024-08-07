import React from 'react';
import eyeIcon from '../assets/materials/eye.png';
import eyeSlash from '../assets/materials/eye-slash.png';
import googleIcon from '../assets/materials/google-icon-colored.png';
import facebookIcon from '../assets/materials/facebook-icon-colored.png';
import { useLocation, useNavigate, useNavigation } from 'react-router';

const LogReg = () => {

    const {pathname} = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
      
        window.scrollTo({
            top: 0,
        })

    }, []);
    
    return (
        <div className='logreg-main-container w-11/12 mx-auto xxs:w-4/5'>
           
          <div className={`${(pathname === "/register") && "register"} w-full relative mt-10 logreg-card flex justify-center items-center xl:mx-auto xl:mb-16 xl:overflow-hidden`}>
            {/* Description Overlay */}
            <div className={`hidden  logreg-desc ${(pathname === "/register") && "register"} xl:flex`}>
            </div>

            <div className='hidden z-20 w-full xl:flex'>
                
            <div className={`${(pathname === "/register") && "translate-x-1/2 opacity-0"} text-pureWhite  relative w-1/2 h-full flex justify-center items-center flex-col gap-4 transition-all duration-1000 px-10 text-center`}>
                    <h2 className='text-3xl font-semibold'>Join in our platform</h2>
                    <p>Create your account and start to explore the features of our online platform!</p>
                    <button onClick={() => navigate('/register')} className='border-2 border-pureWhite p-3 px-14 rounded-xl cursor-pointer relative z-20 mt-5 text-sm'>Register</button>
                </div>

                <div className={`${(pathname === "/login") && "-translate-x-1/2 opacity-0"} text-pureWhite relative w-1/2 h-full flex justify-center items-center flex-col gap-4 transition-all text-center px-14 duration-1000`}>
                    <h2 className='text-3xl font-semibold'>Login your account</h2>
                    <p>Login your registered email and continue browsing your favorite recipes.</p>
                    <button onClick={() => navigate('/login')} className='border-2 border-pureWhite p-3 px-14 rounded-xl cursor-pointer relative z-20 mt-5 text-sm'>Login</button>
                </div>

            </div>


             {/* Forms to be fill up */}
             <LoginForm pathname={pathname} />
             <RegisterForm pathname={pathname} />

          </div>




        </div>
    )
}

const LoginForm = ({pathname}) => {

    const navigate = useNavigate()

    return (
        <form className={`${(pathname !== "/login") && "translate-x-full opacity-0"} absolute right-0 top-0 w-full bg-pureWhite flex flex-col gap-8 transition-all duration-1000 xl:w-1/2`}>
                <div className='text-center flex flex-col gap-2 relative'>
                  <h3 className='text-xl font-semibold xxs:text-2xl'>Login your account</h3>
                  <p className='text-sm font-semibold text-lightOrange'>New Online Platform</p> 
                </div>
               

                <div className='flex justify-between gap-2 recommend-logins'>
                    <div className='flex-grow relative flex gap-2 items-center p-3 border justify-center border-gray rounded-lg bg-ash'>
                        <div className='absolute cursor-pointer inset-0'></div>
                        <img className='w-5 sm:w-7' src={googleIcon} alt='' />
                        <p className='font-semibold'>Login with google</p>
                    </div>

                    <div className='flex-grow relative flex gap-2 items-center p-3 justify-center border border-gray rounded-lg bg-ash'>
                        <div className='absolute cursor-pointer inset-0'></div>
                        <img className='w-5' src={facebookIcon} alt='' />
                        <p className='font-semibold'>Login with facebook</p>
                    </div>
                </div>

                <div className='relative account-divider'>
                    <p className='relative text-sm z-10 bg-pureWhite w-fit px-1 mx-auto'>Or use your account</p>
                </div>

               <div>

               <div className='flex flex-col gap-5'>
                   <div className='relative input-box w-full h-14 rounded-lg border'>
                       <input required className='rounded-lg relative z-10 pl-3 w-full h-full' id="login-email" type='email' />
                       <label className='absolute text-gray opacity-75 transition-all duration-300 -translate-y-1/2 top-1/2 left-3' htmlFor='login-email'>Email</label>
                   </div>

                   <div className='relative input-box w-full h-14 rounded-lg border'>
                       <img className='w-5 absolute right-3 top-1/2 -translate-y-1/2' src={eyeIcon} alt='' />
                       <input required className='rounded-lg pl-3 w-full h-full' id="login-password" type='password' />
                       <label className='absolute text-gray opacity-75 transition-all duration-300 top-1/2 -translate-y-1/2 left-3' htmlFor='login-password'>Password</label>
                   </div>
                </div>

                <p className='mt-5 underline text-lightOrange font-semibold text-sm'>Forgot Password</p>

               </div>
               
               <div className='xl:px-10'>
                 <button className='bg-lightOrange w-full text-pureWhite py-3 rounded-lg'>Log In</button>
                 <p className='mt-2 text-xs sm:mt-6 sm:text-sm xl:hidden'>Already have an account? Try to <span onClick={() => navigate('/register')} className='text-lightOrange font-semibold cursor-pointer'>register</span></p>
               </div>
               
             </form>
    )
}

const RegisterForm = ({pathname}) => {
    
    const navigate = useNavigate()

    return (
        <form className={`${(pathname !== "/register") && "-translate-x-full opacity-0"} absolute top-0 left-0   absolute w-full bg-pureWhite flex flex-col gap-8 transition-all duration-1000 xl:w-1/2`}>
            <div className='text-center flex flex-col gap-2'>
              <h3 className='text-xl font-semibold xxs:text-2xl'>Register an account</h3>
              <p className='text-sm font-semibold text-lightOrange'>New Online Platform</p> 
            </div>
        

        

       <div>

       <div className='flex flex-col gap-7'>
           <div className='input-box h-14 relative border rounded-lg'>
               <input required className='pl-3 w-full h-full' id="register-email" type='email' />
               <label className='absolute transition-all duration-300 left-3 top-1/2 -translate-y-1/2' htmlFor='register-email'>Email</label>
           </div>

           <div className='input-box h-14 relative border rounded-lg'>
               <input required className='pl-3 w-full h-full' id="register-password" type='password' />
               <label className='absolute transition-all duration-300 left-3 top-1/2 -translate-y-1/2' htmlFor='register-password'>Password</label>
           </div>

           <div className='input-box h-14 relative border rounded-lg'>
               <input required className='pl-3 w-full h-full' id="confirm-password" type='password' />
               <label className='absolute transition-all duration-300 left-3 top-1/2 -translate-y-1/2' htmlFor='confirm-password'>Confirm Password</label>
           </div>
        </div>

        <div className='relative text-sm items-center flex gap-2 w-fit mt-5'>
            <div className='absolute inset-0 cursor-pointer'></div>
            <p>Show Password</p>
            <img className='w-5' src={eyeIcon} alt='' />
        </div>

       </div>

       <div className='xl:px-10'>
            <button className='bg-lightOrange w-full   text-pureWhite py-3 rounded-lg'>Register</button>
            <p className='mt-2 text-xs sm:mt-6 sm:text-sm xl:hidden'>Dont have an account? Try to <span onClick={() => navigate('/login')} className='text-lightOrange font-semibold cursor-pointer'>login</span></p>
        </div>
        
     </form>
    )
}

export default LogReg