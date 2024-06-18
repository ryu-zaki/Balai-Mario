import React from 'react';
import calendarIcon from '../assets/materials/calendar-icon.png';
import paypalIcon from '../assets/materials/paypal-icon.png';
import chevronDown from '../assets/materials/chevron-down.png';

const CheckoutPage  = () => {

    const [checkoutPages, setCheckoutPages] = React.useState();


    React.useEffect(() => {

        const pages = [<PersonalInfo />, <PaymentMethod />, <OrderSummary />];
        setCheckoutPages(pages);

    }, []);

    return (
        <div className='checkout-section w-full my-12'>
            <div className='flex w-full mb-16 flex-col items-center gap-5 px-7 lg:mb-20 lg:gap-8'>
                <h2 className='text-2xl title-font font-semibold sm:text-3xl lg:text-4xl'>Checkout</h2>
                <div className='flex dot-stages relative justify-between w-full xs:w-80 lg:w-96'>
                    <div className='border-2 active border-pureWhite rounded-full w-7 aspect-1 bg-lightGray lg:w-9'></div>
                    <div className='border-2 border-pureWhite rounded-full w-7 aspect-1 bg-lightGray lg:w-9'></div>
                    <div className='border-2 border-pureWhite rounded-full w-7 aspect-1 bg-lightGray lg:w-9'></div>
                    
                    {/* Line */}
                    <div className='absolute dots-line -z-10 left-0 h-1 top-1/2 -translate-y-1/2 w-full bg-lightGray'></div>
                </div>
            </div>
             
             <div className='px-4 stages-container sm:mx-auto'>
             {
                /* Components */
                <PersonalInfo />
             }

            <div className='flex gap-2 mt-10  justify-end text-xs text-pureWhite sm:text-sm lg:text-base lg:gap-4'>
                <button className='rounded-lg bg-lightOrange p-2 px-6 lg:px-9'>Back</button>
                <button className='rounded-lg bg-lightOrange p-2 px-6'>Continue</button>
            </div>

             </div>
            
            

        </div>
    )
}

const CreateInfoBox = (label, example) => {

    return (
        {
            label,
            example 
        }
    )
 }

    const InfoBox = ({info}) => {

        const {label, example} = info;

        return (
            <div className='flex flex-col gap-2 lg:gap-3'>
                <label className='text-xs sm:text-sm lg:text-base'>{label}</label>
                <input className='border border-gray w-full text-xs p-2 rounded-lg sm:p-3 lg:text-sm' placeholder={`ex. ${example}`}/>
            </div>
        )
    }

const PersonalInfo = () => {

    return (
        <section className='personal-info-sec xs:p-6 xs:rounded-xl sm:p-8 lg:p-12'>
            <h2 className='font-semibold mb-5 sm:text-xl sm:mb-7 lg:text-2xl'>Personal Info</h2>
            <div>
                <InfoBox info={CreateInfoBox("First Name", "Jhonwell")} />
                <InfoBox info={CreateInfoBox("Last Name", "Espanola")} />
                <InfoBox info={CreateInfoBox("Email", "jhonwellespanola4@gmail.com")} />
                <InfoBox info={CreateInfoBox("Phone Number", "09514406062")} />
            </div>
        </section>
    )
}


const PaymentMethod = () => {
    

    const TypeRadio = ({label}) => {

        return (
            <div>
                <input type='radio' />
                <label>{label}</label>
            </div>
        )
    }

    const ReservationBox = () => {
        return (
            <div>
                <div>
                    <h3>Date of Arrival at Balai Mario</h3>
                    <div>
                        <img src={calendarIcon} alt='' />
                        <span>Set Date</span>
                    </div>
                </div>

                <div>
                    <h3>Leave a Message (Optional)</h3>
                    <textarea placeholder='Write your message here..'></textarea>
                </div>
            </div>
        )
    }

    const SpecialEventBox = () => {
        
        return (
            <div>
                <div>
                <div>
                    <h3>Type of Event</h3>
                    <div>
                        <span>Event</span>
                        <img src={chevronDown} alt="" />
                    </div>
                </div>

                <div>
                    <h3>Date of this Event</h3>
                    <div>
                        <img src={calendarIcon} alt='' />
                        <span>Date & Time</span>
                    </div>
                </div>
                </div>
               
               <div>
                 <label>Write the description of an actual event</label>
                 <textarea placeholder='Write your Message'></textarea>
               </div>
            </div>
        )
    }

    const DeliveryBox = () => {
        
        return (
            <div>
                <InfoBox info={CreateInfoBox("Street Address", "Blk 50 Lot 9 Northville 2b, Bagumbong")} />
                <InfoBox info={CreateInfoBox("State/Province", "Metro Manila")} />
                <InfoBox info={CreateInfoBox("City", "Caloocan City")} />
                <InfoBox info={CreateInfoBox("ZIP/Postal Code", "1400")} />
            </div>
        )
    }


    return (
        <div>
            <div>
                <h2>Type of Order</h2>
                <div>
                    <div>
                    {
                        ['Reservation', "Special Event", "Delivery"]
                        .map((label, index) => {
                            return <TypeRadio label={label} key={index} />
                        })
                    }
                    </div>
                    
                    <div>

                    </div>
                </div>
            </div>

            <div>
                <h2>Payment Method</h2>
                <div>
                    <div>
                        <div>
                            <input type='radio' />
                            <label>Paypal</label>
                        </div>

                        <div>
                            <input type='radio' />
                            <label>GCASH</label>
                        </div>
                    </div>


                    <div>
                        <h3>Event Fee: &#8396;300.00</h3>
                        <h3>Total: &#8396;200.00</h3>
                        <h3>Grand Total: &#8396;500.00</h3>
                    </div>
                </div>

                <div>
                    <img src={paypalIcon} alt='' />
                    <p>You will Redirected to your Paypal account to complete your purchase, Thankyou.</p>
                </div>
            </div>
        </div>
    )
}


const OrderSummary = () => {

    const InfoBox = ({label, value}) => {
        return (
            <div>
                <span>{label}</span>
                <p>{value}</p>
            </div>
        )
    }

    const PersonalInfoSum = () => {

        return (
            <div>
                <h3>Personal Info</h3>
                <div>
                    <InfoBox label={"Full Name"}  value={"Jhonwell Espanola"}/>
                    <InfoBox label={"Email"}  value={"Jhonwell Espanola"}/>
                    <InfoBox label={"Phone Number"}  value={"09514406062"}/>
                </div>
            </div>
        )
    }

    const DishSum = () => {

        const Dish = () => {
            return (
                <div>
                   <div>
                      <img src='' alt='' />
                      <div>
                        <span>STARTER</span>
                        <h3>Special Bulalo</h3>
                        <p>&#8396;200.00</p>
                      </div>
                   </div>

                   <span>x2</span>
                </div>
            )
        }

        return (
            <div>
              <h3>Your Dish</h3>
              <div>
                 <Dish />
                 <Dish />
                 <Dish />
              </div>
            </div>
        )
    }

    const PaymentMethodSum = () => {
        return (
            <div>
                <h2>Payment Method</h2>
                <div>
                    <p>Cash on Delivery</p>
                </div>

                <InfoBox 
                  label={"Street Address"} 
                  value={"Blk 50 Lot 9 Northville 2b, Bagumbong"} 
                />
                <InfoBox 
                  label={"State / Province"} 
                  value={"Metro Manila"} 
                />
                <InfoBox 
                label={"City"} 
                value={"Caloocan City"} 
              />
            </div>
        )
    }

    const TypeOrderSum = () => {

        const FlatInfo = ({label, value}) => {
            return (
                <div>
                    <p>{label}</p>
                    <p>&#8396;{value}</p>
                </div>
            )
        }

        return (
            <div>
                <h2>Type of Order</h2>
                <div>
                    <p>Delivery</p>
                    <div>
                        <FlatInfo label={"Delivery Fee"} value={"50.00"} />
                        <FlatInfo label={"Total"} value={"150.00"} />
                        <FlatInfo label={"Grand Total"} value={"200.00"} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section>
            <h2>Order Summary</h2>

            <div>
                <PersonalInfoSum />
                <DishSum />
            </div>

            <div>
                <PaymentMethodSum />
                <TypeOrderSum />
            </div>
        </section>
    )
}

export default CheckoutPage;