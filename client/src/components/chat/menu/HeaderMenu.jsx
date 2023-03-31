import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";

const MenuOption = styled(MenuItem)`
  font-size: 14 px;
  padding: 15px 60px 5px 24px;
  color: #4a4a4a;
`;

const HeaderMenu = ({ setOpenDrawer }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <MoreVertOutlinedIcon onClick={handleClick} style={{cursor: 'pointer  '}} />

      <Menu
        anchorEl={open}
        open={open}
        keepMounted
        onClose={handleClose}
        getcontentanchore1={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption
          onClick={() => {
            handleClose();
            setOpenDrawer(true);
          }}
        >
          Profile
        </MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
