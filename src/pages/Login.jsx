import { Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

function Login() {
    return (
    <>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Login
      </Typography>
      <LoginForm />
    </>
  );
}

export default Login;