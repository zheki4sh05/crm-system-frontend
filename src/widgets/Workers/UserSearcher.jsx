import { Box,Grid2 } from "@mui/material";
import SearchBox from "../../shared/SearchBox";
import { fetching } from "../../app/util/searchType";

function UserSearcher() {
    return (
   
        <SearchBox primaryText={"найти пользователя"} type={fetching}/>

    );
}

export default UserSearcher;