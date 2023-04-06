import { Box, Typography, styled } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import { formatDate, downloadMedia } from "../../../utils/common-utils";
import { useContext } from "react";
import { AccountContext } from "../../context/AcountProvider";
import { iconPDF } from "../../../constants/data";

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
        <OwnMsg>
          {/* Check to see if the file is image or text and sidplay it accordingly */}
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </OwnMsg>
      ) : (
        <RecievedMsg>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </RecievedMsg>
      )}
    </>
  );
};

const TextMessage = ({ message }) => {
  return (
    <>
      <Text>{message.text}</Text>
      <Time>{formatDate(message.createdAt)}</Time>
    </>
  );
};

const ImageMessage = ({ message }) => {
  return (
    <>
      <Box style={{ position: "relative" }}>
        {
          message.text.includes('.pdf') ? (
            <Box style={{ display: "flex" }}>
              <img src={iconPDF} alt="pdf-icon" style={{ width: 80 }} />
              <Typography style={{ fontSize: 14 }}>
                 {/* To remove the localhost from the name display */}
                {message.text.split("/").pop()}
              </Typography>
            </Box>
          ) : (
            <img
              style={{
                width: "100%",
                minWidth: 50,
                height: "100%",
                objectFit: "cover",
              }}
              src={message.text}
              alt={message.text}
            />
          )
        }
        <Time style={{ position: "absolute", bottom: 0, right: 0 }}>
          <GetAppIcon
            style={{
              marginRight: 10,
              border: "1px solid gray",
              borderRadius: "50%",
              cursor: "pointer"
            }}
            fontSize="small"
            onClick={(e) => {downloadMedia(e, message.text)}}
          />
          {formatDate(message.createdAt)}
        </Time>
      </Box>
    </>
  );
};

export default Msg;
