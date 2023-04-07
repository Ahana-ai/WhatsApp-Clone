import { createContext, useState, useRef, useEffect } from 'react';

import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AcountProvider = ({ children }) => {
  //State to store the login account and change with login
    const [account, setAccount] = useState();
    //State to store the specific chat selected to be openned on the right
    const [person, setPerson] = useState({});

    const socket = useRef();

    useEffect(() => {
      socket.current = io("http://localhost:8000")
    }, []);

  return (
    <>
        <AccountContext.Provider value={{
            socket,
            account,
            setAccount,
            person,
            setPerson
        }}>
            {children}
        </AccountContext.Provider>
    </>
  )
}

export default AcountProvider;
