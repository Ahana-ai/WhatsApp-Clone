import { createContext, useState } from 'react';

export const AccountContext = createContext(null);

const AcountProvider = ({ children }) => {
  //State to store the login account and change with login
    const [account, setAccount] = useState();
    //State to store the specific chat selected to be openned on the right
    const [person, setPerson] = useState({});

  return (
    <>
        <AccountContext.Provider value={{
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
