import { Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

function Login() {
    return (
    <>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Login
      </Typography>
      <LoginForm />
      <Typography align='center'>
        <Link to={"/register"}>Don't have account, go to register</Link>
      </Typography>
    </>
  );
}

export default Login;