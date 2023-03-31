import { Box, Divider, styled } from "@mui/material";

import { useEffect, useState, useContext } from "react"

//Components
import { getUser } from "../../service/api"
import OneCoversation from "./OneCoversation";
import { AccountContext } from "../../context/AcountProvider";

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: 0.6;
`;

const Conversations = () => {
    //To store the users for all the conversation list
    const [users, setUser] = useState([]);

    const { account } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let res = await getUser();
            console.log(res, 'ressss');
            setUser(res);
        }
        fetchData();
    }, []);

  return (
    <>
        <Component>
            {
                users.map((user) => (
                    user.sub !== account.sub &&
                    // return(
                    <>
                        <OneCoversation user={user} />
                        <StyledDivider />
                    </>
                    // )
                    // return <div>convo</div>
                ))
            }
        </Component>
    </>
  )
}

export default Conversations
