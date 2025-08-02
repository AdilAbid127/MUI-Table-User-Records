import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [createUserData, setCreateUserData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const createUser = () => {
    axios
      .post("http://localhost:3000/users", createUserData)
      .then(() => {
        alert("User created successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Paper elevation={3} sx={{ margin: 2, padding: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Create User
      </Typography>
      <TextField
        fullWidth
        label="Name"
        sx={{ mb: 2 }}
        onChange={(e) =>
          setCreateUserData({ ...createUserData, name: e.target.value })
        }
      />
      <TextField
        fullWidth
        label="Username"
        sx={{ mb: 2 }}
        onChange={(e) =>
          setCreateUserData({ ...createUserData, username: e.target.value })
        }
      />
      <TextField
        fullWidth
        label="Email"
        sx={{ mb: 2 }}
        onChange={(e) =>
          setCreateUserData({ ...createUserData, email: e.target.value })
        }
      />
      <TextField
        fullWidth
        label="Phone"
        sx={{ mb: 2 }}
        onChange={(e) =>
          setCreateUserData({ ...createUserData, phone: e.target.value })
        }
      />
      <Button variant="contained" onClick={createUser}>
        Create User
      </Button>
    </Paper>
  );
};

export default CreateUser;
