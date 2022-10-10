import React, { useState } from "react";
import { createContext } from "vm";

const UserContext = createContext({ 
    userId: '', 
    userName: '',
    userEmail: '',
    isAuthenticated: false 
});

export interface IUser {
    userId: number,
    userName: string,
    userEmail: string,
    isAuthenticated: boolean
}

const UserProvider = ( children: any | null ): JSX.Element => {
    // const [userId, setUserId] = useState({userId: null})
    // const [userName, setUserName] = useState({userName: null})
    // const [userEmail, setUserEmail] = useState({userEmail: null})
    // const [isAuthenticated, setIsAuthenticated] = useState({isAuthenticated: false})

   const [user, setUser] = useState<IUser | undefined>(undefined)

     setUser({
         userId: 1, 
         userName: 'Alex', 
         userEmail: 'alex.jungwiirth@gmail.com', 
         isAuthenticated: true
     })


    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider
