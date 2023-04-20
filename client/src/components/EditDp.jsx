import { Box } from "@mui/material";
import "./temp.css";
import {useTheme} from "@mui/material";
import { useNavigate } from "react-router-dom";

const EditDp = ({ image,id, size = "60px" }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    return (
        <Box width={size} height={size}>
            <img
                style={{ objectFit: "cover", borderRadius: "50%", position: "absolute" }}
                width={size}
                height={size}
                alt="user"
                src={`/assets/${image}`}
            />

            {theme.palette.mode === "dark" ? (
                <img
                    width="20px"
                    height="20px"
                    alt="user"
                    src="../assets/logowhite.png"
                    onClick={() => navigate(`/update`)}
                    className="ab"></img>
            ) : (
                <img
                    width="20px"
                    height="20px"
                    alt="user"
                    src="../assets/logoblack.png"
                    onClick={() => navigate(`/update`)}
                    className="ab"></img>
            )}
        </Box>
    );
};

export default EditDp;