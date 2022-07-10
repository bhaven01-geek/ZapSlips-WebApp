import React, { useState, useEffect } from 'react'
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';


const Logout = () => {

  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();
  // Handle Logout Click
  async function handleClick() {
  // e.preventDefault()
    setError("")
    try {
      await logout();
      navigate("../../login");
    } catch {
      // console.log("error");
      setError("Failed to log out");
    }
  }

  useEffect(() => {

    handleClick();
  }, [])


  return (
    <>
    {
      error ? <Alert severity = "error">{error}</Alert> : ""
    }
    </>
    )
}

export default Logout
