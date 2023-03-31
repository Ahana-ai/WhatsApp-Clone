import { Box } from "@mui/material"
import { useContext } from "react"
import { AccountContext } from "../../context/AcountProvider"
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"

const ChatBox = () => {
    const { person } = useContext(AccountContext);

  return (
    <>
        <Box>
            <Box style={{ height: '75%' }}>
                <ChatHeader person={person} />
            </Box>

            <Box>
                <Messages person={person} />
            </Box>
        </Box>
    </>
  )
}

export default ChatBox
