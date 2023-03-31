import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined"
import SearchOutlined from "@mui/icons-material/SearchOutlined"
import { Box, Typography, styled } from "@mui/material"

import { useContext } from "react";

//Components
import { AccountContext } from "../../context/AcountProvider";

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const Status = styled(Typography)`
    margin-left: 12px !important;
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        cursor: pointer;
        font-size: 24px;
        color: #000;
    }
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
});

const ChatHeader = ({ person }) => {
    const { account } = useContext(AccountContext);

  return (
    <Header>

        <Image src={person.picture} alt="dp" />
        <Box>
            <Name>{person.name}</Name>
            <Status>Online</Status>
        </Box>

        <RightContainer>
            <SearchOutlined />
            <MoreVertOutlined />
        </RightContainer>
    </Header>
  )
}

export default ChatHeader
