import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const editUser = () => {
    axios
      .put(`http://localhost:3000/users/${id}`, userData)
      .then(() => {
        alert("User updated successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Paper elevation={3} sx={{ margin: 2, padding: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Edit User
      </Typography>
      <TextField
        fullWidth
        label="Name"
        value={userData.name || ""}
        sx={{ mb: 2 }}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <TextField
        fullWidth
        label="Username"
        value={userData.username || ""}
        sx={{ mb: 2 }}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
      <TextField
        fullWidth
        label="Email"
        value={userData.email || ""}
        sx={{ mb: 2 }}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <TextField
        fullWidth
        label="Phone"
        value={userData.phone || ""}
        sx={{ mb: 2 }}
        onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
      />
      <Button variant="contained" onClick={editUser}>
        Update User
      </Button>
    </Paper>
  );
};

export default EditUser;
