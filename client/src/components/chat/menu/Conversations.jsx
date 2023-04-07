import { Box, Divider, styled } from "@mui/material";

import { useEffect, useState, useContext } from "react";

//Components
import { getUser } from "../../service/api";
import OneCoversation from "./OneCoversation";
import { AccountContext } from "../../context/AcountProvider";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const Conversations = ({ text }) => {
  //To store the users for all the conversation list in an array format
  const [users, setUser] = useState([]);

  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let res = await getUser();
      // console.log(res, 'ressss');
      //To filter data in the search box using Js functions
      let fiteredData = res?.filter((user) =>
        user?.name.toLowerCase().includes(text.toLowerCase())
      );
      //Setting the conversation list to view after fetching it from the database using the api getUser
      setUser(fiteredData);
    };
    fetchData();
  }, [text]); //Changing the conversation list according to the input in search box

  // Hitting the socket.io when a conversation is clicked to open to get which user is online
  useEffect(() => {
    socket.current.emit("addUsers", account);

    // Getting the array of active users from socket.io
    socket.current.on("getUsers", (users) => {
      setActiveUsers([...users]);
      // setActiveUsers(users);
    });
  }, [account]);

  return (
    <>
      <Component>
        {
          // Viewing the conversation list according to the db
          users?.map(
            (user) =>
              user?.sub !== account?.sub && (
                <>
                  <OneCoversation user={user} />
                  <StyledDivider />
                </>
              )
          )
        }
      </Component>
    </>
  );
};

export default Conversations;
