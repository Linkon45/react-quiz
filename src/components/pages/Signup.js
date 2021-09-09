import React from 'react';
import styles from '../../styles/Signup.module.css';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';
const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div class='column'>
        <Illustration />
        <Form className={`${styles.signup}`}>
          <TextInput type='text' placeholder='Enter Name' icon='person' />
          <TextInput
            type='text'
            placeholder='Enter email'
            icon='alternate_email'
          />
          <TextInput type='password' placeholder='Enter password' icon='lock' />
          <TextInput
            type='password'
            placeholder='Confirm password'
            icon='lock_clock'
          />
          <Checkbox text='I agree to the Terms &amp; Conditions' />
          <Button text='Submit now' />
          <div className='info'>
            Already have an account? <a href='login.html'>Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;