import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import FeedbackIcon from "@mui/icons-material/Feedback";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"; // Assuming Footer is in the same directory

const HelpPage = () => {
  const navigate = useNavigate();

  const helpOptions = [
    { icon: <HelpOutlineIcon fontSize="large" />, title: "My Cashback is Missing", link: "/missing-cashback" },
    { icon: <SearchIcon fontSize="large" />, title: "Help with Tracked Cashback", link: "/tracked-cashback" },
    { icon: <ChatIcon fontSize="large" />, title: "Frequently Asked Questions", link: "/faq" },
    { icon: <HeadsetMicIcon fontSize="large" />, title: "Want to Connect with Us", link: "/connect" },
    { icon: <FeedbackIcon fontSize="large" />, title: "Give Us Feedback", link: "/feedback" },
  ];

  const handleCardClick = (link) => {
    const isLoggedIn = localStorage.getItem("token"); // token or isLoggedIn flag
    if (!isLoggedIn) {
      navigate("/login"); // redirect to login page
    } else {
      navigate(link); // go to selected page
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ backgroundColor: "#0050FF", color: "white", py: 5, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          How Can We Help You?
        </Typography>
      </Box>

      {/* Help Options */}
      <Container sx={{ py: 5 }}>
        <Grid container spacing={3} justifyContent="center">
          {helpOptions.map((option, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{ textAlign: "center", p: 2, cursor: "pointer" }}
                onClick={() => handleCardClick(option.link)}
              >
                <CardContent>
                  {option.icon}
                  <Typography variant="subtitle1" mt={1}>
                    {option.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
        < Footer/> 
    </Box>
  );
};

export default HelpPage;
