import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Default() {
  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate("/login");
  }

  const handleRegisterButton = () => {
    navigate("/register");
  }


  return (
    <Box
      sx={{
        maxWidth: 400, 
        m: "auto"
      }}
    >
      <Button onClick={handleLoginButton} variant="contained" fullWidth sx={{ mt: 3 }}>
        Login
      </Button>
      <Button onClick={handleRegisterButton} variant="contained" fullWidth sx={{ mt: 3 }}>
        Register
      </Button>
    </Box>
  );
}

export default Default;
