import { Dialog } from "@mui/material";
import { Box, styled } from "@mui/system";
import EmptyChat from "./chats/EmptyChat";
import Menu from "./menu/Menu";

const dialogStyle = {
  height: "96%",
  width: "100%",
  maxHeight: "100%",
  maxWidth: "100%",
  margin: "20px",
  overflow: "hidden",
  //   boxShadow: "none",
  borderRadius: 0,
};

const Component = styled(Box)`
    display: flex;
`

const LeftComponent = styled(Box)`
    min-width: 450px;
`

const RightComponent = styled(Box)`
    min-width: 300px;
    width: 73%;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14)
`

const ChatDialog = () => {
  return (
    <>
      <Dialog
        open={true}
        PaperProps={{ sx: dialogStyle }}
        hideBackdrop={true}
        maxWidth={'md'}
      >
        {/* Parent Component */}
        <Component>
            {/* Left Component */}
            <LeftComponent>
                <Menu/>
            </LeftComponent>
            {/* Right Component */}
            <RightComponent>
                <EmptyChat/>
            </RightComponent>
        </Component>

      </Dialog>
    </>
  );
};

export default ChatDialog;
