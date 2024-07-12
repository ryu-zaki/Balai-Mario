import React from 'react'
import plusIcon from '../assets/materials/plus-icon.png';

/* Icons */
import person1 from '../assets/icons/jhonwell.jpg';
import person2 from '../assets/icons/marwin.jpg';
import person1 from '../assets/icons/kingpaul.jpg';


const users = [
    {
        name: "Jhonwell Espanola",
        image: person1,
        email: "jhonwellespanola4@gmail.com"
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
    }
]

const AccountBox = ({data}) => {

    const {image, name, email} = data;
      
    return (
        <div>
          <div>
            <img src={image} alt='' />
            <div>
                <h3>{name}</h3>
                <span>{email}</span>
            </div>
          </div>

          {/* 3 Dots Info */}
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
    )
}


const AvailableAccounts = () => {

  return (
    <>
    <div className='fixed bg-darkOverlay inset-0'></div>
    <div>
      <h2>Available Accounts</h2>
      <div>
        {
            users.map((data, index) => {
                return <AccountBox data={data} key={index} />
            })
        }
      </div>

      <button>Add</button>
    </div>
    </>
  )
}

export default AvailableAccounts
