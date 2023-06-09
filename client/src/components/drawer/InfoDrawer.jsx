import { Box, Drawer, Typography, styled } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Profile from "./Profile";

const drawerStyle = {
  left: 20,
  top: 18,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #ffffff;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const Text = styled(Typography)`
  font-size: 18px;
`;

const InfoDrawer = ({ open, setOpen }) => {
  const toggleToClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* The profile/Account details that pops right from the left side */}
      <Drawer
        open={open}
        onClose={toggleToClose}
        PaperProps={{ sx: drawerStyle }}
        style={{ zIndex: 1500 }}
      >
        <Header>
          <KeyboardBackspaceIcon onClick={() => setOpen(false)} />
          <Text>Profile</Text>
        </Header>

        <Component>
          <Profile />
        </Component>
      </Drawer>
    </>
  );
};

export default InfoDrawer;
