import React from 'react'
import plusIcon from '../assets/materials/plus-icon.png';
import crossIcon from '../assets/materials/cross-icon.png';
import circleCross from '../assets/materials/x-mark.png'

/* Icons */
import person1 from '../assets/icons/jhonwell.jpg';
import person2 from '../assets/icons/marwin.jpg';
import person3 from '../assets/icons/kingpaul.jpg';


const users = [
    {
        name: "Jhonwell Espanola",
        image: person1,
        email: "jhonwellespanola4@gmacscscil.com"
    },
    {
        name: "Marwin Batis",
        image: person2,
        email: "marwinBatis@gmail.com"
    },
    {
        name: "Kinpaul Salonga",
        image: person3,
        email: "kingpaulSalonga@gmai.com"
    },
    {
      name: "Kinpaul Salonga",
      image: person3,
      email: "kingpaulSalonga@gmai.com"
  },
  {
    name: "Kinpaul Salonga",
    image: person3,
    email: "kingpaulSalonga@gmai.com"
}
]

const AccountBox = ({data}) => {

    const {image, name, email} = data;
      
    return (
        <div className='w-full account-box border-gray border py-4 px-3 flex items-center justify-between rounded-lg relative sm:rounded-xl'>
          <div className='absolute inset-0 cursor-pointer z-10'></div>
          <span className='bg-lightOrange transition-all duration-500   absolute top-0 right-5 text-xxs p-1 px-3 rounded-md text-pureWhite sm:py-2 sm:opacity-0'>last login 2days ago</span>
          <div className='flex w-full items-center gap-2 sm:gap-5'>
            <div className='w-10 aspect-1 sm:w-14'>
            <img className='w-full h-full rounded-full' src={image} alt='' />
            </div>
            
            <div className='text-xs max-w-full'>
                <h3 className='text-sm font-semibold sm:text-base transition-all duration-100'>{name}</h3>
                <p className='w-32 truncate xxs:w-44 sm:text-sm sm:w-60'>{email}</p>
            </div>
          </div>

          {/* 3 Dots Info */}
          {/* <div className='cursor-pointer flex flex-col gap-1 relative z-30 acc-menu-dots'>
            <div className='w-1 h-1 bg-dark rounded-full'></div>
            <div className='w-1 h-1 bg-dark rounded-full'></div>
            <div className='w-1 h-1 bg-dark rounded-full'></div>
          </div> */}
          <img className='w-4 sm:w-6' src={circleCross} alt="" />
        </div>
    )
}


const AvailableAccounts = ({setAvailableAccs, availableAccs}) => {

  return (
    <>
   {availableAccs && <div onClick={() => setAvailableAccs(false)} className='z-50 fixed bg-darkOverlay inset-0'></div>}
    <div className={`${!availableAccs && "scale-0 origin-top"} z-50 available-accounts rounded-2xl w-11/12 flex flex-col justify-center items-center transition-all duration-1000 bg-pureWhite fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 py-6 gap-5 px-4 xxs:w-80 sm:py-10 sm:px-10 sm:rounded-3xl`}>

    <img onClick={() => setAvailableAccs(false)} draggable={false} className='select-none cursor-pointer w-5 absolute top-3 right-3 sm:w-7 sm:top-4 sm:right-4' src={crossIcon} alt='' />
      <h2 className='text-xl font-semibold text-darkBrown sm:text-3xl sm:mb-3'>Available Accounts</h2>
      <div className='flex flex-col gap-6 w-full max-h-80 overflow-auto py-4 pr-1 sm:px-6'>
        {
            users.map((data, index) => {
                return <AccountBox data={data} key={index} />
            })
        }
      </div>

      <button className='bg-lightOrange text-pureWhite flex gap-2 w-11/12 mt-3 justify-center items-center py-3 rounded-lg sm:py-4'><img src={plusIcon} alt='' /><span>New Account</span></button>
    </div>
    </>
  )
}

export default AvailableAccounts
