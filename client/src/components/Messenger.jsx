import React from "react";
import LoginDialog from "./accounts/LoginDialog";
import { AppBar, Toolbar, Box, styled } from "@mui/material";

const Component = styled(Box)`
      height: 100vh;
      width: 100%,
      background: #dcdcdc;
  `;

const Header = styled(AppBar)`
  height: 220px;
  background-color: #00A884;
  box-shadow: none;
`;

const Messenger = () => {

  return (
    // <>
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Component>
    // </>
  );
};

export default Messenger;
