import { Box, styled, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useContext } from "react";
import { AccountContext } from "../context/AcountProvider";

const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
});

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`;

const BoxWrapper = styled(Box)`
    background: #ffffff;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    & :first-of-type {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    };
    & :last-child {
        margin: 14px 0;
        color: #4A4A4A;
    }
`;

const DescriptionContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
        color: #8696a0;
        font-size: 13px;
    }
`;

const Profile = () => {
    //Calling the account that has been logged in using Context Api
    const { account } = useContext(AccountContext);

  return (
    <>
        <ImageContainer>
            <Image src={account.picture} alt="Dp" />
        </ImageContainer>

        <BoxWrapper>
            <Typography>Your name</Typography>
            <Typography>{account.name}</Typography>
        </BoxWrapper>

        <DescriptionContainer>
            <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
        </DescriptionContainer>

        <BoxWrapper>
            <Typography>About</Typography>
            <Typography>C'est la vie!!</Typography>
            {/* <EditIcon /> */}
        </BoxWrapper>
    </>
  )
}

export default Profile
