import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { useContext, useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { AccountContext } from "../../context/AcountProvider";
import { getMessage, newMessage } from "../../service/api";
import Msg from "./Msg";

const Component = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Wrapper = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const StyledMsg = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ person, conversation }) => {  
  //State to store the msgs in the input field
  const [value, setValue] = useState("");

  // State to call the msgs for display
  const [ msg, setMsg ] = useState([]);

  // State to hold the attachment files before sending
  const [ file, setFile ] = useState();

  // State to hold the images
  const [ image, setImage ] = useState("");

  // State to hold the incoming messages => single msg is coming
  const [incomingMessage, setIncomingMessage] = useState();

  const { account, socket, setNewMsgFlag, newMsgFlag } = useContext(AccountContext);

  console.log(conversation);
  // To fetch all the msgs in the container as the component loads using getMessage API
  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessage(conversation._id);
      setMsg([...data]);
      // setMsg(data);
    };
    if (conversation?._id) getMessageDetails();
  }, [person._id, conversation._id, newMsgFlag]);

  // UseEffect to bring the scrollbar to the bottom of the chat which as default opens to the top of the chat
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" })
}, [msg]);


// To get the messages in real-time
useEffect(() => {
  socket.current.on('getMessage', data => {
    setIncomingMessage({
        ...data,
        createdAt: Date.now()
    })
})
},[]);

// To add the incomingMessages to the messages in the convo as new msg is sent
useEffect(() => {
  incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && setMsg(
    (prev) =>{ 
      return  [...prev, incomingMessage] 
    }
  )
}, [incomingMessage, conversation]);

  //Function to know which key has been pressed and accordingly store the msg in db when enter is clicked on the keyboard.
  const sendText = async (e) => {
    console.log(e);
    // const code = e.keyCode || e.which;
    const code = e.code;
    // console.log(code);

    if(!value) return;

    if (code === "Enter") {
      console.log(value);
      let message = {};
        if (!file) {
            message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: "text",
                text: value
            };
        } else {
            message = {
                senderId: account.sub,
                conversationId: conversation._id,
                receiverId: person.sub,
                type: "file",
                text: image
            };
          }

          // Send messages in real-time
          socket.current?.emit("sendMessage", message);

      console.log(message, "mm");
      await newMessage(message);

      // Emptying the text area in the footer after msg being stored in Db
      setValue("");

      setFile();
      setImage("");

      // Toggling the newMsgFlag to set it true so it would call the useEffect to display the messages
      setNewMsgFlag((prev) => {
        !prev
      });
    };
  };

  return (
    <>
      <Component>
        <Wrapper>
            {
              msg && msg.map((msg) => {
                return (
                  <StyledMsg ref={scrollRef}>
                    <Msg message={msg}/>
                  </StyledMsg>
                )
              })
            }

        </Wrapper>
        <Footer 
          sendText={sendText} 
          setValue={setValue} 
          value={value} 
          file={file}
          setFile={setFile}
          setImage={setImage}
        />
      </Component>
    </>
  );
};

export default Messages;
