import React, { useState } from 'react';
import Header from './Header'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

const getInputData = (e) =>{
    e.preventDefault();  
    setFullName('');
    setEmail('');
    setPassword('');
}


  return (
    <div className='h-[100vh]'>
     <Header/>
      <div className='absolute'>
        <img
          className='w-[100vw] h-[100vh]'
          src='https://singh-cp.github.io/netflix-landingpage/images/netflix-background-image.jpg'
          alt='banner'
        />
 </div>
        <form  onSubmit={getInputData} className='absolute flex w-3/12 my-48 left-0 right-0 mx-auto flex-col items-center justify-center bg-black p-12  opacity-90'>
           <h1 className='text-3xl text-white font-bold mb-5'> {isLogin ? 'Login' : 'SignUp'}</h1>
          <div>


             {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className='outline-none p-3 my-2 w-full bg-gray-800 text-white rounded-sm'
              type='text'
              placeholder='Fullname'
            />
          )}
             <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-gray-800 text-white rounded-sm my-2 p-3 outline-none w-full' type="email" placeholder='Email' />
             <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-gray-800 text-white rounded-sm my-2 p-3 outline-none w-full' type="password" placeholder='Password' />
             <button type='submit' className='btn bg-red-600 text-white my-3 w-full p-3 rounded-md'>
                 {isLogin ? 'Login' : 'SignUp'}
             </button>
          <p className='text-white text-left'>
            {isLogin ? 'New to Netflix?' : 'Already have an account?'}{' '}
            <span
              onClick={handleLogin}
              className='mx-1 text-sm text-blue-400 cursor-pointer'
            >
              {isLogin ? 'SignUp' : 'Login'}
            </span>
          </p>
          
          </div>

        </form>
     
    </div>
  )
}

export default Login
