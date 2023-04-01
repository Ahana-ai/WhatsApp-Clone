import { Box, styled } from "@mui/material"
import Footer from "./Footer";
import { useContext, useState } from "react";
import { AccountContext } from '../../context/AcountProvider'
import { newMessage } from "../../service/api";

const Component = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Wrapper = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Messages = ({ person, conversation }) => {

  //State to store the msgs in the input field 
  const [ value, setValue ] = useState('');

  const { account } = useContext(AccountContext);

  //Function to know which key has been pressed and accordingly store the msg in db when enter is clicked on the keyboard.
  const sendText = async (e) => {
    console.log(e);
    // const code = e.keyCode || e.which;
    const code = e.code;
    // console.log(code);
    if(code === "Enter"){
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value
      }
      console.log(message, 'mm');
      await newMessage(message);

      // Emptying the text area in the footer after msg being stored in Db
      setValue('');
    }
  }

  return (
    <>
        <Component>
            <Wrapper>

            </Wrapper>
            <Footer 
              sendText={sendText}
              setValue={setValue}
              value={value}
            />
        </Component>
    </>
  )
}

export default Messages
