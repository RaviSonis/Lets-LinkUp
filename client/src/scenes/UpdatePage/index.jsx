import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbarup from "scenes/Navbarupdate";
import UpdateWidget from "scenes/widgets/UpdateWidget";

const UpdatePage = () => {
    const { _id, picturePath,firstName } = useSelector((state) => state.user);
    return (
        <Box>
            <Navbarup />
            
            <Box
                width="100%"
                padding="2rem 6%"
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box>
                    <UpdateWidget userId={_id} picturePath={picturePath} firstName={firstName}/>
                </Box>
        </Box>
        </Box>
    );
};

export default UpdatePage;