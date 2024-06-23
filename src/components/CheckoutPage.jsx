import React from 'react';
import calendarIcon from '../assets/materials/calendar-icon.png';
import paypalIcon from '../assets/materials/paypal-icon.png';
import gcashIcon from '../assets/materials/gcash-icon.png';
import samplePic from '../assets/products/sample-product.jpg';
import chevronDown from '../assets/materials/chevron-down.png';
import { useAvailableRecipes } from '../context/AvailableRecipes';
import { useNavigate } from 'react-router';

const CheckoutPage  = ({setIsFinish}) => {
    
    const navigate = useNavigate();
    const [checkoutPages, setCheckoutPages] = React.useState([]);
    const [pagesIndex, setPagesIndex] = React.useState(0);
    const [isLargeScreen, setIsLargeScreen] = React.useState();
    const [loadingVisible, setLoadingVisible] = React.useState(false);
    const [buttonCat, setButtonCat] = React.useState("");


    React.useEffect(() => {
        
        const match = window.matchMedia("(min-width: 620px)");


        const handleChangeSize = (e) => {
            setIsLargeScreen(e.matches);
        }

        handleChangeSize(match);

        match.addEventListener('change', handleChangeSize);

        return () => {
            match.removeEventListener("change", handleChangeSize);
        }
        
    }, [])

    const handleIndex = ({target}) => {

        setButtonCat(target.id)
        
        if (target.id === "add")
        setLoadingVisible(true)
    }

    const handleCancel = () => {
        navigate(-1);
        setPagesIndex(0)
    }

    React.useEffect(() => {

        const pages = [<PersonalInfo />, <PaymentMethod />, <OrderSummary />];
        setCheckoutPages(pages);

    }, []);

    React.useEffect(() => {

        if (!!checkoutPages.length && pagesIndex === checkoutPages.length) {
            setIsFinish(true);
        }


    }, [pagesIndex, checkoutPages])

    React.useEffect(() => {

        if (buttonCat === "sub") {
            setPagesIndex(prev => !prev ? 0 : prev - 1)
            setButtonCat("");
            return
        }

        if (loadingVisible) {
            const timeout = setTimeout(() => {
              setLoadingVisible(false)
              setPagesIndex(prev => buttonCat === "add" ? prev < checkoutPages.length ? prev + 1 : prev : !prev ? 0 : prev - 1);
              setButtonCat("");
            }, 1000)
            
            
            return () => {
                clearTimeout(timeout)
            }
        }

    }, [loadingVisible, buttonCat]);


    React.useEffect(() => {
        window.scrollTo({top: 0}) 
    }, [pagesIndex]);

    const dots = new Array(3).fill("");

    return (
        <>
        {
            loadingVisible && (
<div className='fixed z-30 inset-0 h-full w-full bg-darkOverlay flex flex-col gap-3 justify-center items-center'>
             <l-quantum
               size="60"
               speed="1.75"
               color="#f1f1f1" 
             ></l-quantum>
        <h3 className='text-lg font-semibold text-pureWhite animate-pulse'>Validating...</h3>
        </div>
            )
        }
        

        <div className='checkout-section w-full my-12'>
            <div className='flex w-full mb-16 flex-col items-center gap-5 px-7 lg:mb-20 lg:gap-10'>
                <h2 className='text-2xl title-font font-semibold sm:text-3xl lg:text-5xl'>Checkout</h2>
                <div className='flex dot-stages relative justify-between w-full xs:w-80 lg:w-96'>
                    
                    {
                      dots.map((data, index) => {

                        return <div key={index} className={`${index <= pagesIndex && "active"} border-2 border-pureWhite rounded-full w-7 aspect-1 bg-lightGray lg:w-10`}></div>
                      })
                    }
                    
                    {/* Line */}
                    <div className='absolute dots-line -z-10 left-0 h-1 top-1/2 -translate-y-1/2 w-full bg-lightGray lg:h-1.5'></div>
                </div>
            </div>
             
             <div className='stages-container sm:mx-auto'>
             <div className={`px-4 sm:p-7 sm:rounded-xl lg:p-12 ${isLargeScreen && "darker-shadow"}`}>

              {
                (pagesIndex < checkoutPages.length) &&
                checkoutPages[pagesIndex]
              }

              </div>

              <div className='pr-5 flex gap-2 mt-10  justify-end text-xs text-pureWhite sm:text-sm sm:pr-0 lg:text-base lg:gap-4'>
                 {
                    !!pagesIndex ? <button onClick={handleIndex} id="sub" className='rounded-lg bg-lightOrange p-2 px-6 lg:px-9'>Back</button> : <button onClick={handleCancel} className='rounded-lg bg-lightOrange p-2 px-6 lg:px-9'>Cancel</button>
                 }
                 <button id="add" onClick={handleIndex} className='rounded-lg bg-lightOrange p-2 px-6'>{
                    pagesIndex < checkoutPages.length -1 ? "continue" : "finish"}</button>
              </div>
             </div>
             

        </div>
        </>
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
            <div className={`${label.includes("ZIP") && "w-1/2"} flex flex-grow flex-col gap-2 lg:gap-3`}>
                <label className='text-sm sm:text-sm lg:text-base'>{label}</label>
                <input className='border border-gray w-full text-xs p-3 rounded-lg sm:p-3 lg:text-sm lg:p-4' placeholder={`ex. ${example}`}/>
            </div>
        )
    }

const PersonalInfo = () => {

    return (
        <section className='personal-info-sec'>
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
    
    const [typeOrder, setTypeOrder] = React.useState("reservation");
    const [paymentMethod, setPaymentMethod] = React.useState("paypal");

    const handleInputClick = ({target}) => {

        target.nextElementSibling.click();

    }

    const ReservationBox = () => {
        return (
            <div className='text-darkBrown flex flex-col gap-4 sm:gap-7'>
                <div>
                    <h3 className="mb-3 text-sm lg:text-base lg:mb-5">Date of Arrival at Balai Mario</h3>
                    <input className='cursor-pointer rounded-lg items-center text-xs border py-2 px-4 w-fit lg:text-sm lg:px-6 lg:py-3' type='date' />
                    
                </div>

                <div>
                    <h3 className='mb-3 text-sm lg:text-base lg:mb-5'>Leave a Message <span className='text-lightOrange font-semibold'>(Optional)</span></h3>
                    <textarea className='dark-shadow resize-none rounded-lg min-h-32 w-full p-3 text-sm' placeholder='Write your message here..'></textarea>
                </div>
            </div>
        )
    }

    const SpecialEventBox = () => {
        
        return (
            <div className='text-sm lg:text-base'>
                <div className='flex gap-10 sm:justify-start sm:gap-8 lg:gap-14'>
                <div>
                    <h3 className="mb-2 sm:mb-4">Type of Event</h3>
                    <div className='flex dark-shadow justify-center py-2 px-4 rounded-lg gap-2 items-center sm:px-6 sm:py-3 sm:gap-3'>
                        <span>Event</span>
                        <img src={chevronDown} alt="" />
                    </div>
                </div>

                <div>
                    <h3 className='mb-2 sm:mb-4'>Date of this Event</h3>
                    <input className='cursor-pointer flex dark-shadow py-2 px-4 rounded-lg items-center text-xs gap-2 sm:py-3 sm:px-6 sm:text-sm' type='date' />
                   
                </div>
                </div>
               
               <div className='mt-7 flex flex-col gap-4 sm:mt-10'>
                 <label>Write the description of an actual event</label>
                 <textarea className='resize-none dark-shadow rounded-lg p-4 min-h-32' placeholder='Write your Message'></textarea>
               </div>
            </div>
        )
    }

    const DeliveryBox = () => {
        
        return (
            <div className='flex flex-col gap-5 sm:gap-7'>
                <InfoBox info={CreateInfoBox("Street Address", "Blk 50 Lot 9 Northville 2b, Bagumbong")} />
                <div className='flex flex-col gap-5 xs:flex-row xs:justify-between'>
                <InfoBox info={CreateInfoBox("State/Province", "Metro Manila")} />
                <InfoBox info={CreateInfoBox("City", "Caloocan City")} />
                </div>
                <InfoBox info={CreateInfoBox("ZIP/Postal Code", "1400")} />
            </div>
        )
    }



    const typeOrderBoxes = {
        reservation: <ReservationBox />,
        "special event": <SpecialEventBox />,
        delivery: <DeliveryBox />
    }


    return (
        <div>
            <div>
                <h2 className='font-semibold mb-5 sm:text-xl sm:mb-7 lg:text-2xl lg:mb-10'>Type of Order</h2>
                <div className='mt-5 flex flex-col gap-6 sm:flex-row sm:gap-10 lg:gap-10'>
                    <div className='flex flex-col gap-5 text-sm lg:text-base'>
                    
                      {/* Reservation */}

                        <div className='flex w-fit gap-2 items-center relative py-3 px-5 rounded-lg border border-lightOrange sm:w-auto'>
                            <div onClick={handleInputClick} className='absolute z-10 cursor-pointer inset-0'></div>
                            <input id="reservation" name='order-type' onChange={() => setTypeOrder("reservation")} checked={typeOrder === "reservation"} className='hidden' type='radio' />
                            <div className='custom-radio'></div>
                            <label htmlFor='reservation whitespace-nowrap'>Reservation</label>
                        </div>

                        {/* Reservation */}

                        <div className='flex gap-2 items-center relative py-3 px-5 rounded-lg border border-lightOrange w-fit sm:w-auto'>
                            <div onClick={handleInputClick} className='absolute z-10 cursor-pointer inset-0'></div>
                            <input id="delivery" name='order-type' onChange={() => setTypeOrder("delivery")} checked={typeOrder === "delivery"} className='hidden' type='radio' />
                            <div className='custom-radio'></div>
                            <label htmlFor='delivery whitespace-nowrap'>Delivery</label>
                        </div>

                        {/* Reservation */}

                        <div className='flex gap-2 items-center relative py-3 px-5 rounded-lg border border-lightOrange w-fit sm:w-auto'>
                            <div onClick={handleInputClick} className='absolute z-10 cursor-pointer inset-0'></div>
                            <input id="special event" name='order-type' onChange={() => setTypeOrder("special event")} checked={typeOrder === "special event"} className='hidden' type='radio' />
                            <div className='custom-radio'></div>
                            <label htmlFor='special event whitespace-nowrap'>Event</label>
                        </div>
                    
                    </div>
                    
                    <div className='mt-5 flex-grow sm:mt-0 xs:border xs:p-7 xs:border-gray xs:rounded-xl'>
                      {typeOrderBoxes[typeOrder]}
                    </div>
                </div>
            </div>

            <div className='mt-7 border-t-2 pt-7 border-darkBrown lg:mt-16 lg:pt-16'>
                <h2 className='font-semibold mb-5 sm:text-xl sm:mb-7 lg:text-2xl lg:mb-10'>Payment Method</h2>
                <div className='flex items-start flex-row justify-between gap-6'>
                    <div className='flex flex-col gap-3 text-sm sm:gap-6 lg:text-lg'>
                        <div className='flex gap-2 items-center relative py-3 px-5 rounded-lg border border-lightOrange w-fit sm:w-auto lg:gap-3'>
                            <div onClick={handleInputClick} className='absolute z-10 cursor-pointer inset-0'></div>
                            <input id="paypal" name='payment-method' onChange={() => setPaymentMethod("paypal")} checked={paymentMethod === "paypal"} className='hidden' type='radio' />
                            <div className='custom-radio'></div>
                            <label htmlFor='paypal'>Paypal</label>
                        </div>

                        <div className='flex gap-2 relative items-center py-3 px-5 rounded-lg border border-lightOrange w-fit sm:w-auto lg:gap-3'>
                            <div onClick={handleInputClick} className='absolute z-10 cursor-pointer inset-0'></div>
                            <input id='gcash' name='payment-method' onChange={() => setPaymentMethod("gcash")} checked={paymentMethod === "gcash"} className='hidden' type='radio' />
                            <div className='custom-radio'></div>
                            <label htmlFor='gcash'>GCASH</label>
                        </div>
                    </div>


                   {/*  <div className='flex flex-col gap-2 text-xs bg-lighterOrange text-lightOrange p-3 rounded-lg xxs:text-sm lg:text-lg lg:p-4 lg:px-6'>
                        <h3>Total: <span className='font-semibold'>&#8369;500.00</span></h3>
                    </div> */}
                </div>

                <div className='flex gap-3 text-sm items-center mt-10 bg-lighterOrange p-5 rounded-xl text-lightOrange xs:text-base xs:p-7 lg:gap-5 lg:p-10 lg:text-lg'>
                    <img className='w-10 lg:w-20' src={paymentMethod === "gcash" ? gcashIcon : paypalIcon} alt='' />
                    <p>You will Redirected to your <span className="font-semibold uppercase">{paymentMethod}</span> account after finishing this form, Thankyou.</p>
                </div>
            </div>
        </div>
    )
}


const OrderSummary = () => {

    const InfoBox = ({label, value}) => {
        return (
            <div>
                <span className='font-semibold'>{label}</span>
                <p className='xs:mt-2'>{value}</p>
            </div>
        )
    }

    const PersonalInfoSum = () => {

        return (
            <div className='sm:max-w-52 lg:max-w-80'>
                <h3 className='text-lightOrange font-semibold lg:text-xl'>Personal Info</h3>
                <div className='mt-5 flex flex-wrap gap-10 sm:gap-5 lg:flex-col lg:gap-8'>
                    <InfoBox label={"Full Name"}  value={"Jhonwell Espanola"}/>
                    <InfoBox label={"Email"}  value={"jhonwellespanola@gmail.com"}/>
                    <InfoBox label={"Phone Number"}  value={"09514406062"}/>
                </div>
            </div>
        )
    }

    const DishSum = () => {

        const {recipes} = useAvailableRecipes();

        const Dish = ({data}) => {

            const {recipeName, price, image, category} = data;

            return (
                <div className='flex justify-between items-center w-full'>
                   <div className='flex gap-3 items-center xs:gap-4'>
                      <img draggable={false} className='object-cover aspect-1 w-12 rounded-lg xs:w-16 sm:w-12 lg:w-16' src={image} alt='' />
                      <div>
                        <span className='text-xs uppercase font-semibold text-gray'>{category}</span>
                        <h3 className='font-semibold capitalize'>{recipeName}</h3>
                        <p className='mt-1 text-xs text-lightOrange'>&#8369;{price.toFixed(2)}</p>
                      </div>
                   </div>

                   <span className='text-xl text-lightOrange font-semibold'>x2</span>
                </div>
            )
        }

        return (
            <div className='p-5 rounded-2xl dark-shadow xs:w-96 xs:mx-auto xs:p-7 lg:mx-0'>
              <h3 className='text-xl font-semibold mb-5 lg:text-2xl'>Your Dish</h3>
              <div className='max-h-64 summary-dish-con overflow-auto text-sm flex pr-4  flex-col gap-5 xs:text-base sm:text-sm lg:text-base'>
                 {
                    recipes.filter((_, index) => index < 8)
                    .map((data, index) => {
                       return <Dish data={data} key={index} />
                    })
                 }
              </div>
            </div>
        )
    }

    const PaymentMethodSum = () => {
        return (
            <div className='sm:max-w-80'>
                <h2 className='text-lightOrange font-semibold lg:text-lg'>Payment Method</h2>
                <div className='my-5 text-sm border border-gray py-3 p-5 w-fit rounded-xl xs:py-4 xs:px-6'>
                    <p>Cash on Delivery</p>
                </div>

                <div className='flex flex-col gap-5'>
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
                
            </div>
        )
    }

    const TypeOrderSum = () => {

        const {recipes} = useAvailableRecipes();

        const FlatInfo = ({label, value}) => {
            return (
                <div className='flex gap-2'>
                    <p>{label}:</p>
                    <p className='font-semibold'>&#8369;{value}</p>
                </div>
            )
        }

        const total = recipes.filter((_, index) => index < 8).map(({price}) => {
            return price
        }).reduce((total, num) => total + num)

        return (
            <div>
                <h2  className='text-lightOrange font-semibold lg:text-lg'>Type of Order</h2>
                <div className='mt-2 xs:mt-4 lg:mt-5'>
                    <h3 className='font-semibold mb-2 lg:mb-5'>Delivery</h3>
                    <div className='xs:flex xs:flex-col xs:gap-3'>
                        <FlatInfo label={"Delivery Fee"} value={"50.00"} />
                        <FlatInfo label={"Total"} value={total.toFixed(2)} />
                        <FlatInfo label={"Grand Total"} value={(total + 50).toFixed(2)} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section>
            <h2 className='font-semibold mb-5 text-lg text-center sm:text-xl sm:mb-14 lg:text-2xl lg:mb-10 lg:text-left'>Order Summary</h2>

            <div className='flex flex-col gap-10 xs:px-5 sm:flex-row sm:gap-3 sm:px-0 lg:justify-between'>
                <PersonalInfoSum />
                <DishSum />
            </div>

            <div className='flex flex-col gap-7 mt-10 xs:px-5 sm:flex-row sm:px-0 sm:gap-12 sm:mt-16 lg:gap-16 lg:mt-20'>
                <PaymentMethodSum />
                <TypeOrderSum />
            </div>
        </section>
    )
}

export default CheckoutPage;