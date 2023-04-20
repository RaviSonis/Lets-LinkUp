import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./about.css";

const AboutUs = () => {
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
                    <Typography fontWeight="500" variant="h4" sx={{ mb: "2.5rem" }}> ABOUT-US</Typography>
                ) : (
                    <Typography fontWeight="500" variant="h4" sx={{ mb: "2.5rem" }}> ABOUT-US</Typography>
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
                    Welcome to Let's LinkUp, the Social Media for EveryOne!
                    <br/>
                    Firstly, the creators wants to thank you for using the app. 
                    This app is running with the help of MERN Technologies, where all data is stored in MongoDb and all Data is viewed with the help of pages created by React.
                    Hope you enjoyed the environment.
                    
                </Typography>
                <Typography>
                Made with love by Ravi Soni
                </Typography>
            </Box>
        </Box>
    );
};

export default AboutUs;