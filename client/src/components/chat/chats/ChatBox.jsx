import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AcountProvider";

//Components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { getConversation } from "../../service/api";

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);

  //State to store the last message on the left side below name
  const [conversation, setConversation] = useState({});

  // Get the conversation id from the db using the senderId and receiverId
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      //   console.log(data, "dataa");
      setConversation({ ...data });
    };
    getConversationDetails();
  }, [person.sub]);

  return (
    <>
      <Box>
        <Box style={{ height: "75%" }}>
          <ChatHeader person={person} />
        </Box>

        <Box>
          <Messages person={person} conversation={conversation} />
        </Box>
      </Box>
    </>
  );
};

export default ChatBox;
