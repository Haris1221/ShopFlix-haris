import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className='auth'>
      <div className='login'>
      <h1 className='he'>Sign in</h1>
      
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
      
      <div className='authSi'><p>New to Netflix?</p><button className='newBtn' onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Sign in' : 'Sign up now'}</button></div>
      </div>
    </main>
  );
}