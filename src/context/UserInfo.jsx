import React from 'react';

const ComponentContext = React.createContext(null);

const UserInfo = ({children}) => {

    const [isLogin, setIsLogin] = React.useState(true);

    return (

        <ComponentContext.Provider value={{isLogin}}>
         {children}
        </ComponentContext.Provider>

    )
}

export const useUserinfo  = () => {

    return React.useContext(ComponentContext);
}

export default UserInfo;