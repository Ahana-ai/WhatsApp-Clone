import { Box, styled } from "@mui/material"
import Footer from "./Footer";

const Component = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Wrapper = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Messages = () => {
  return (
    <>
        <Component>
            <Wrapper>

            </Wrapper>
            <Footer />
        </Component>
    </>
  )
}

export default Messages
