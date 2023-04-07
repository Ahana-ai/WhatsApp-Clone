import { Box, styled } from "@mui/material";
import { useContext, useState } from "react";
//Mui Icons
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
//Components
import { AccountContext } from "../../context/AcountProvider";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
  }
  & :first-of-type {
    font-size: 25px;
    margin-right: 8px;
    margin-top: 2px;
  }
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
  cursor: "pointer",
});

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { account } = useContext(AccountContext);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <Component>
        <Image src={account.picture} alt="Dp" onClick={toggleDrawer} />
        <Wrapper>
          <DonutLargeIcon />
          <ChatOutlinedIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
      </Component>
    </>
  );
};

export default Header;
