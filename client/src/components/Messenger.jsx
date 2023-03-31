import React from "react";
import LoginDialog from "./accounts/LoginDialog";
import { AppBar, Toolbar, Box, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "./context/AcountProvider";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
      height: 100vh;
      width: 100%,
      background: #dcdcdc;
  `;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00a884;
  box-shadow: none;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00a884;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {/* To check if account is logged in to show the conversations or show the to-log-in window */}
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
