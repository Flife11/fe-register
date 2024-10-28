import { Typography } from '@mui/material';
import RegisterForm from '../components/RegisterForm';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Register
      </Typography>
      <RegisterForm />
      <Typography align='center'>
        <Link to={"/login"}>Already have an account, go to login</Link>
      </Typography>
    </>
  );
};

export default Register;
