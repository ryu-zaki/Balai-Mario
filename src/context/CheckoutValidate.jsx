import React, { createContext, useContext, useRef } from 'react'

const ComponentContext = createContext(null);

const CheckoutValidate = ({children}) => {
 
  const [isValidationClick, setIsValidationClick] = React.useState(false);
  const [paymentMethod, setPaymentMethod] = React.useState("paypal");
  const [typeOrder, setTypeOrder] = React.useState("reservation");  

  const [userInfo, setUserInfo] = React.useState({
    fields: [
    {
      type: "firstName",
      value: '',
      isValid: true,
      label: "First Name",
      example: "Jhonwell"
    },
    {
      type: "lastName",
      value: '',
      isValid: true,
      label: "Last Name",
      example: "Española"
    },
    {
      type: "email",
      value: '',
      isValid: true,
      label: "Email",
      example: "jhonwellespanola4@gmail.com"
    },
    {
      type: "phoneNumber",
      value: '',
      label: 'Phone Number',
      isValid: true,
      example: "09514406062"
    },
   ],

   validateFields() {
    setUserInfo(prev => {
      const fields = [...prev.fields];

      for (let i = 0; i < fields.length; i++) {
          const {value, type} = fields[i];
          fields[i].isValid = !!value;
          
          //patterns
          const emailPattern = /.*@.*\.+.*/g.test(value);
          const phonePattern = /\d{11}/.test(value);
          if (type === "email") {
            fields[i].isValid = emailPattern;
          }
           
           
          if (type === "phoneNumber") {
            fields[i].isValid = phonePattern;
          }
          
      }
      return {...prev, fields};
    })
   } 

});
  

  const [orderInfo, setOrderInfo] = React.useState({
    reservation: {
      resetMsg: false,
      fields: [
         {
          type: 'arrivalDate',
          label: 'Date of Arrival at Balai Mario',
          value: new Date().toISOString().split("T")[0],
          isValid: true
         },
         {
          type: 'optionalMessage',
          label: 'Optional Message',
          value: "",
          isValid: true,
          isOptional: true
         },

      ],
      validateInfo() {
        setOrderInfo(prev => {
          
          const fields = [...prev.reservation.fields];
          let resetMsg = true
          for (let i = 0; i < fields.length; i++) {
            let boolValue = !!fields[i].value;
             fields[i].isValid = !!fields[i].isOptional ? true : boolValue;

             if (!boolValue) resetMsg = false;
          }

          return (
            {
              ...prev,
              reservation: {
              ...prev.reservation,
              fields,
              resetMsg
              
              }
            }
          )
        })
      }
    },
    delivery: {
      resetMsg: false,
      fields: [
        {
          type: "streetAddress",
          value: '',
          isValid: true,
          label: "Street Address",
          example: "Blk 50 Lot 9 Northville 2b, Bagumbong"
        },
        {
          type: "province",
          value: '',
          isValid: true,
          label: "State/Province",
          example: "Metro Manila"
        },
        {
          type: "city",
          value: '',
          isValid: true,
          label: "City",
          example: "Caloocan City"
        },
        {
          type: "zip",
          value: '',
          isValid: true,
          label: "ZIP/Postal Code",
          example: "1400"
        },
      ],

      validateInfo() {
         setOrderInfo(prev => {
           const arr = [...prev.delivery.fields];
           let resetMsg = true;
           for (let i = 0; i < arr.length; i++) {
            let boolValue = !!arr[i].value;
            arr[i].isValid = boolValue;

            if (!boolValue) resetMsg = false
           } 
          
          return ({
            ...prev,
            delivery: {
              ...prev.delivery,
              fields: arr,
              resetMsg
            }
          });
         })
      }
    },
    
    "special event": {
      resetMsg: false,
      fields: [
        {
          type: "event",
          value: "",
          isValid: true,
          label: "Type of event",
        },
        {
          type: "eventDate",
          value: new Date().toISOString().split("T")[0],
          isValid: true,
          label: "Date of this Event",
        },
        {
          type: "description",
          value: '',
          isValid: true,
          label: "Description of an actual event",
        },
      ],
      validateInfo() {
         setOrderInfo(prev => {
           const fields = [...prev["special event"].fields];
           let resetMsg = true;

           for (let i = 0; i < fields.length; i++) {
            const valueBool = !!fields[i].value
            fields[i].isValid = valueBool;
            
            if (!valueBool) resetMsg = false;
           }

           return ({
            ...prev,
            "special event": {
              ...prev["special event"],
              fields,
              resetMsg
            }
           })

         })    
      }
    }
  })


  const handleInfoGetter = (target, setState, category) => {

    const {id, value} = target;
    const isUserInfo = category === "userInfo";

    setState(prev => {
      const fields = isUserInfo ? [...prev.fields] : [...prev.delivery.fields];
 
      for (let i = 0; i < fields.length; i++) {
        if (fields[i].type === id) {
          
             fields[i] = {
             ...fields[i],
             isValid: true,
             value: value,
           }
        }
      }
 
      return isUserInfo ? 
      ({
        ...prev,
        fields
      }) : 
      ({
       ...prev,
       delivery: {
          ...prev.delivery,
          fields,
          resetMsg: true
       },
       
      })
     })
  }
 
  const handleUserInfo = ({target}) => {
    handleInfoGetter(target, setUserInfo, "userInfo");
  }

  const handleOrderType = ({target}) => {
    
    handleInfoGetter(target, setOrderInfo, "delivery");
  }

  const handleReservationField = ({target}) => {
    const {id, value} = target;
    setOrderInfo(prev => {
      const fields = [...prev.reservation.fields];
      for (let i = 0; i < fields.length; i++) {
    
        if (fields[i].type === id) {
          fields[i].value = value;
          fields[i].isValid = true;
        }

        

      }
    

      return ({
        ...prev, 
        reservation: {
          ...prev.reservation,
          fields,
          resetMsg: true
        }
      })
    })
  }

  const handleEventInfo = ({target}) => {

   const {id, value} = target;

   setOrderInfo(prev => {
    
    const fields = [...prev["special event"].fields];

    for (let i = 0; i < fields.length; i++) {
      const item = fields[i];
      if (item.type === id) {
        fields[i].value = value;
        fields[i].isValid = true;
      }
      
    }

    return({
      ...prev,
      "special event": {
        ...prev["special event"],
        fields,
        resetMsg: true
      }
    })
   })
    
  }

  return (
    <ComponentContext.Provider 
      value={
        { 
          userInfo, 
          handleUserInfo, 
          handleOrderType,
          orderInfo, 
          handleReservationField,
          handleEventInfo,
          isValidationClick, 
          setIsValidationClick,
          paymentMethod, 
          setPaymentMethod,
          typeOrder, setTypeOrder
        }}>
      {children}
    </ComponentContext.Provider>
  )
}

export const useCheckoutValidate = () => {
  return useContext(ComponentContext);
}

export default CheckoutValidate
