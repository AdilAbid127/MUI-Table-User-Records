import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicTable from "../Components/Table/Table";
import { Box, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Button
        onClick={() => navigate("/createUser")}
        variant="contained"
        sx={{ margin: 2, float: "right" }}
      >
        Create User
      </Button>
      <BasicTable userdata={userData} />
    </Box>
  );
};

export default Home;
