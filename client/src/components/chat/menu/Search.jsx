import { Box, styled } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { InputBase } from '@mui/material';

const Component = styled(Box)`
    height: 45px;
    background: #fff;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
`;

const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    width: 100%;
    border-radius: 10px;
`;

const Icon = styled(SearchOutlinedIcon)`
    position: absolute;
    height: 100%;
    padding: 0px 10px;
    font-size: 18px;
    color: #919191;
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 15px;
    height: 15px;
    padding-left: 65px;
    font-size: 14px;
`;

const Search = () => {
  return (
    <>
        <Component>
            <Wrapper>
                <Icon>
                    <SearchOutlinedIcon/>
                </Icon>
                <InputField
                    placeholder="Search or start a new chat"
                />
            </Wrapper>
        </Component>
    </>
  )
}

export default Search
