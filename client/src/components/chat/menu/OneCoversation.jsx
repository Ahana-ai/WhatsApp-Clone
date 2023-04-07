import { Box, Typography, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AcountProvider";
import { setConversation, getConversation } from "../../service/api";
import { formatDate } from "../../../utils/common-utils";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  height: 50,
  width: 50,
  borderRadius: "50%",
  padding: "0 14px",
  objectFit: "cover",
});

const Container = styled(Box)`
  display: flex;
`;

const TimeStamp = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: #000000;
  margin-right: 20px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
`;

const OneCoversation = ({ user }) => {
  const { setPerson, account, newMsgFlag } = useContext(AccountContext);

  // State to store the recent message for left component display
  const [message, setMessage] = useState({});

  // To display the last text on the left component
  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub
      });
      setMessage({
        text: data?.message,
        timeStamp: data?.updatedAt
      });
    }
    getConversationDetails();
  }, [newMsgFlag])

  console.log('woohooo' , message);

  //Function to isolate different chats so that messages don't mix using setConversation post api
  const getChat = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  console.log({ senderId: account.sub, receiverId: user.sub });

  return (
    <>
      <Component onClick={() => getChat()}>
        <Box>
          <Image src={user.picture} alt="dp" />
        </Box>
        <Box style={{ width: "100%" }}>
          <Container>
            <Typography>{user.name}</Typography>
            {
              message.text && 
              <TimeStamp>
                {formatDate(message?.timeStamp)}
              </TimeStamp>
            }
          </Container>
          <Box>
            <Text>
              {
                message?.text?.includes('localhost') ? 'media' : message?.text
              }
            </Text>
          </Box>
        </Box>
      </Component>
    </>
  );
};

export default OneCoversation;
