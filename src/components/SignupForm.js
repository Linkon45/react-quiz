import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';
import { Link, useHistory } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState('');

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const reEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const rePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!reEmail.test(email)) {
      return setError('Enter a valid email address');
    }
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }
    if (!rePassword.test(password)) {
      return setError(
        'Enter a password of min 6 length, with at least a upper and lower case letters and a number'
      );
    }
    try {
      setError('');
      setLoading(true);
      await signup(email, password, username);
      history.push('/');
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError('Failed to create an account!');
    }
  }

  return (
    <div>
      <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
        <TextInput
          type='text'
          required
          placeholder='Enter Name'
          icon='person'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          type='text'
          required
          placeholder='Enter email'
          icon='alternate_email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type='password'
          required
          placeholder='Enter password'
          icon='lock'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          type='password'
          required
          placeholder='Confirm password'
          icon='lock_clock'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Checkbox
          text='I agree to the Terms &amp; Conditions'
          required
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
        />
        <Button disabled={loading} type='submit'>
          <span>Submit Now</span>
        </Button>
        {error && <p className='error'>{error}</p>}
        <div className='info'>
          Already have an account? <Link to='/login'>Login</Link> instead.
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
