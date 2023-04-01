import { Box, Typography, styled } from "@mui/material";
import { useContext, useEffect } from "react";
import { AccountContext } from "../../context/AcountProvider";
import { setConversation } from "../../service/api";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled('img')({
  height: 50,
  width: 50,
  borderRadius: '50%',
  padding: '0 14px',
  objectFit: 'cover',
});

const OneCoversation = ({ user }) => {
  const { setPerson, account } = useContext(AccountContext);

  //Function to isolate different chats so that messages don't mix using setConversation post api
  const getChat = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, revieverId: user.sub })
  };

  return (
    <>
    <Component onClick={() => getChat()}>
        <Box>
            <Image src={user.picture} alt="dp" />
        </Box>
        <Box>
          <Box>
              <Typography>{user.name}</Typography>
          </Box>
        </Box>
    </Component>
    </>
  )
}

export default OneCoversation;
