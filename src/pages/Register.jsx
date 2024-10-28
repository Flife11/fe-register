import { Typography } from '@mui/material';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Register
      </Typography>
      <RegisterForm />
    </>
  );
};

export default Register;
