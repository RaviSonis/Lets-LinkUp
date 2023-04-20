import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./about.css";

const ContactUs = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return (
        <Box>
            <Box
                width="100%"
                backgroundColor={theme.palette.background.alt}
                p="1rem 6%"
                textAlign="center"
                onClick={() => navigate("/home")}
            >
                {theme.palette.mode === "dark" ? (
                    <img
                        alt="user"
                        src="../assets/mainlogo.png"
                        className="a"></img>
                ) : (
                    <img

                        alt="user"
                        src="../assets/logomainwhite.png"
                        className="a"></img>
                )}
            </Box>
            <Box
                width="100%"
                backgroundColor={theme.palette.background.alt}
                p="1rem 6%"
                textAlign="center"
                onClick={() => navigate("/home")}
            >
                {theme.palette.mode === "dark" ? (
                    <Typography fontSize={"20px"}> CONTACTS</Typography>
                ) : (
                    <Typography fontSize={"20px"}> CONTACTS</Typography>
                )}
            </Box>
            <Box
                width={isNonMobileScreens ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography fontWeight="500" variant="h4" sx={{ mb: "2.5rem" }}>
                    FOR ANY KIND OF INQUIRY YOU CAN CONTACT US WITH THE HELP OF BELOW MENTIONED EMAILS

                </Typography>
                <Typography>
                    Email Id 1:-  Ravihsoni7654@gmail.com
                    <br/>
                    <br/>
                    Email Id 2:-  Ravihsoni123@gmail.com
                </Typography>
            </Box>
        </Box>
    );
};

export default ContactUs;