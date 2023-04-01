import { Box, InputBase, styled } from "@mui/material";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { useState } from "react";

const Container = styled(Box)`
    height: 50px;
    display: flex;
    background: #ededed;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        colour: #919191;
    }
`;

const SearchBox = styled(Box)`
    background-color: #ffffff;
    border-radius: 10px;
    width: calc(95% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    height: 20px;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
`;

const ClipIcon = styled(AttachFileOutlinedIcon)`
    transform: rotate(55deg);
`;

const Footer = ({ sendText, setValue, value }) => {
  return (
    <>
        <Container>
            <EmojiEmotionsOutlinedIcon />
            <ClipIcon/>
            <SearchBox>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setValue(e.target.value)}
                    // On pressing Enter the msg should be saved in db
                    onKeyPress={(e) => sendText(e)}
                    // To change the value to the state
                    value={value}
                />
            </SearchBox>
            <MicOutlinedIcon />
        </Container>
    </>
  )
}

export default Footer
