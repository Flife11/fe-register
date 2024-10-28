import { useForm } from 'react-hook-form';
import { Box, TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {    
    try {
      setServerError('');      
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      } else {
        navigate('/login');
      }
    } catch (error) {
      setServerError(error.message);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: 400, m: 'auto', p: 3 }}
    >
      {serverError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {serverError}
        </Alert>
      )}

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Please enter a valid email'
          }
        })}
        type="email"
        id="email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Password"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters'
          }
        })}
        type="password"
        id="password"
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Confirm Password"
        {...register('confirmPassword', {
          required: 'Please confirm your password',
          validate: (value, formValues) => 
            value === formValues.password || 'Passwords do not match'
        })}
        type="password"
        id="confirmPassword"
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={isSubmitting}
        sx={{ mt: 3 }}
      >
        Register
      </Button>
    </Box>
  );
}

export default RegisterForm;
