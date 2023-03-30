import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../context/AcountProvider";

const Component = styled(Box)`
  display: flex;
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu,
    Cantarell, Fira Sans, sans-serif;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const Container = styled(Box)`
  padding: 50px 0 50px 50px;
`;

const dialogStyle = {
  height: "95%",
  marginTop: "12%",
  width: "60%",
  maxHeight: "100%",
  maxWidth: "100%",
  overflow: "hidden",
  // boxShadow: "none",
  borderRadius: 0,
};

const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = (res) => {
    const decoded = jwt_decode(res.credential);
    // console.log(res);
    console.log(decoded);
    setAccount(decoded);
  };

  const onLoginError = (res) => {
    console.log("Login Failed!", res);
  };

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Component>
          <Container>
            <Title>To use WhatsApp on your computer:</Title>

            <StyledList>
              <ListItem>1. Open WhatsApp on Web</ListItem>
              <ListItem>2. Login Through your Email</ListItem>
              <ListItem>
                3. Wait for the chats and contacts from your account to load
              </ListItem>
            </StyledList>
          </Container>

          <Box style={{ position: "relative" }}>
            <QRCode src={qrCodeImage} alt="bar code image" />

            <Box
              style={{
                position: "absolute",
                top: "50%",
                transform: "translate(25%)",
              }}
            >
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </>
  );
};

export default LoginDialog;
