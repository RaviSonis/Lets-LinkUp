import {
    EditOutlined,
    LocationOnOutlined,
    Update,
    WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme, TextField, Button, Hidden } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import UserImage from "components/UserImage";
import Dropzone from "react-dropzone";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { updateuser } from "state";

const initialValues = {
    picture: "",
    firstName: "",
    lastName: "",
    location: "",
    occupation: ""
};


const UpdateWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const { _id } = useSelector((state) => state.user);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;



    const getUser = async () => {
        const response = await fetch(`/users/${userId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUser(data);
    };

    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!user) {
        return null;
    }

    const {
        firstName,
        lastName,
        location,
        occupation,
    } = user;

    const handleFormSubmit = async (values) => {
        update(values);
    };

    const update = async (values) => {
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        formData.append("picturePath", values.picture.name);
        console.log("FORMDATA", formData);

        const response = await fetch(`/${userId}/update`, {
            method: "POST",
            body: formData
        });
        const updateduser = await response.json();
        console.log("hello", updateduser);
        dispatch(updateuser({ user: updateduser }));
        navigate("/");
        window.location.reload(false);
    };

    return (

        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}>
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (

                <form onSubmit={handleSubmit} action="" method="POST" encType="multipart/form-data">
                    {/* FIRST ROW */}
                    <FlexBetween
                        gap="0.5rem"
                        pb="1.1rem"
                    >
                        <FlexBetween gap="1rem">
                            <Typography
                                variant="h4"
                                color={dark}
                                fontWeight="500"
                            >
                                Profile Picture

                            </Typography>
                            <br />
                            <UserImage image={picturePath} />
                        </FlexBetween>
                    </FlexBetween>
                    <FlexBetween>
                        <Dropzone
                            acceptedFiles=".jpg,.jpeg,.png"
                            multiple={false}
                            onDrop={(acceptedFiles) =>
                                setFieldValue("picture", acceptedFiles[0])
                            }
                        >
                            {({ getRootProps, getInputProps }) => (
                                <Box
                                    {...getRootProps()}
                                    border={`2px dashed ${palette.primary.main}`}
                                    p="1rem"
                                    sx={{ "&:hover": { cursor: "pointer" } }}
                                >
                                    <input  {...getInputProps()} />
                                    {!values.picture ? (
                                        <p>Add Picture Here</p>
                                    ) : (
                                        <FlexBetween>
                                            <Typography>{values.picture.name}</Typography>
                                            <EditOutlinedIcon />
                                        </FlexBetween>
                                    )}
                                </Box>
                            )}
                        </Dropzone>
                    </FlexBetween>
                    <br />
                    <Divider />
                    <br />
                    <FlexBetween>
                        <Box>
                            <Typography
                                variant="h4"
                                color={dark}
                                fontWeight="500"
                            >
                                First Name :-     {user.firstName}
                            </Typography>
                            <br />
                            <TextField
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName || ""}
                                name="firstName"
                                error={
                                    Boolean(touched.firstName) && Boolean(errors.firstName)
                                }
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}
                            />

                        </Box>
                    </FlexBetween>
                    <br />
                    <Divider />
                    <br />
                    <FlexBetween>
                        <Box>
                            <Typography
                                variant="h4"
                                color={dark}
                                fontWeight="500"
                            >
                                Last Name :-   {lastName}
                            </Typography>
                            <br />
                            <TextField
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName || ""}
                                name="lastName"
                                error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <Box
                                type="hidden"
                                value={_id}
                                name="id"
                            />
                        </Box>
                    </FlexBetween>
                    <br />
                    <Divider />
                    <br />
                    {/* SECOND ROW */}
                    <Box p="1rem 0">
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            <LocationOnOutlined fontSize="large" sx={{ color: main }} />
                            <Typography color={medium}>{location}</Typography>

                            <TextField
                                label="Location"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.location || ""}
                                name="location"
                                error={Boolean(touched.location) && Boolean(errors.location)}
                                helperText={touched.location && errors.location}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
                            <Typography color={medium}>{occupation}</Typography>

                            <TextField
                                label="Occupation"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.occupation || ""}
                                name="occupation"
                                error={
                                    Boolean(touched.occupation) && Boolean(errors.occupation)
                                }
                                helperText={touched.occupation && errors.occupation}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                    </Box>

                    <Divider />

                    {/* THIRD ROW */}


                    <Divider />

                    {/* FOURTH ROW */}
                    <Box p="1rem 0">
                        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
                            Social Profiles
                        </Typography>

                        <FlexBetween gap="1rem" mb="0.5rem">
                            <FlexBetween gap="1rem">
                                <img src="../assets/twitter.png" alt="twitter" />
                                <Box>
                                    <Typography color={main} fontWeight="500">
                                        Twitter
                                    </Typography>
                                    <Typography color={medium}>Social Network</Typography>
                                </Box>
                            </FlexBetween>
                            <EditOutlined sx={{ color: main }} />
                        </FlexBetween>

                        <FlexBetween gap="1rem">
                            <FlexBetween gap="1rem">
                                <img src="../assets/linkedin.png" alt="linkedin" />
                                <Box>
                                    <Typography color={main} fontWeight="500">
                                        Linkedin
                                    </Typography>
                                    <Typography color={medium}>Network Platform</Typography>
                                </Box>
                            </FlexBetween>
                            <EditOutlined sx={{ color: main }} />
                        </FlexBetween>
                    </Box>
                    <Box>
                        <Button
                            fullWidth
                            type="submit"
                            // onSubmit={update()}
                            sx={{
                                m: "2rem 0",
                                p: "1rem",
                                backgroundColor: palette.primary.main,
                                color: palette.background.alt,
                                "&:hover": { color: palette.primary.main },
                            }}
                        >
                            SUBMIT
                        </Button>
                    </Box>
                </form>

            )}

        </Formik>

    );

};

export default UpdateWidget;