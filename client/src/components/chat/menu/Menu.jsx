import { Box } from "@mui/material";
import { useState } from "react";
// Components
import Conversations from "./Conversations";
import Header from "./Header";
import Search from "./Search";

const Menu = () => {
  //State to store the input in the Search Box
  const [text, setText] = useState("");

  return (
    <>
      <Box>
        <Header />
        {/* Sending the setText func to get the state of the Search Box */}
        <Search setText={setText} />
        {/* Sending the state to filter out the conversations */}
        <Conversations text={text} />
      </Box>
    </>
  );
};

export default Menu;
