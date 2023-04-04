import { Box, Typography, styled } from "@mui/material";
import { formatDate } from "../../../utils/common-utils";
import { useContext } from "react";
import { AccountContext } from "../../context/AcountProvider";

// CSS for msgs being recieved.
const OwnMsg = styled(Box)`
  background: #dcf8c6;
  padding: 5px;
  max-width: 60%;
  width: fit-content;
  margin-left: auto;
  margin-top: 10px;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const RecievedMsg = styled(Box)`
  background: #ffffff;
  padding: 5px;
  max-width: 60%;
  width: fit-content;
  margin-top: 10px;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  fonr-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  margin-top: auto;
  color: #919191;
  word-break: keep-all;
`;

const Msg = ({ message }) => {
  const { account } = useContext(AccountContext);

  return (
    <>
      {account.sub === message.senderId ? (
        //  return (
        <OwnMsg>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </OwnMsg>
      ) : (
        //  )
        <RecievedMsg>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </RecievedMsg>
      )}
    </>
  );
};

export default Msg;
