import { createContext, useState, useRef, useEffect } from "react";

import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AcountProvider = ({ children }) => {
  //State to store the login account and change with login
  const [account, setAccount] = useState();
  //State to store the specific chat selected to be openned on the right
  const [person, setPerson] = useState({});
  // State to toggle if msg is being sent rn, if it is true it will call the useEffect or else it will not
  const [newMsgFlag, setNewMsgFlag] = useState(false);

  // State to set the array of active users
  const [activeUsers, setActiveUsers] = useState([]);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:8000");
  }, []);

  return (
    <>
      <AccountContext.Provider
        value={{
          account,
          setAccount,
          person,
          setPerson,
          socket,
          activeUsers,
          setActiveUsers,
          newMsgFlag,
          setNewMsgFlag,
        }}
      >
        {children}
      </AccountContext.Provider>
    </>
  );
};

export default AcountProvider;
