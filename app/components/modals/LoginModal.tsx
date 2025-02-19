import React, { useState } from 'react'; import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth"; import { FaGoogle, FaPhone } from "react-icons/fa";

const Login = () => { const auth = getAuth();

const handleGoogleSignIn = async () => { const provider = new GoogleAuthProvider(); await signInWithPopup(auth, provider); };

const sendOtp = async () => { window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth); const phoneNumber = "+639123456789"; // Replace with user input const confirmation = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier); window.confirmationResult = confirmation; };

return ( <div className="flex flex-col items-center min-h-screen bg-gala-blue text-white p-6"> <img src="/public/images/logo.png" alt="GALA Logo" className="h-16 mb-4" /> <h1 className="text-2xl font-bold">Welcome to GALA</h1> <p className="text-sm text-gray-200 mb-6">Book and host properties easily</p>

<button 
    onClick={handleGoogleSignIn} 
    className="flex items-center space-x-2 bg-white text-gala-blue px-4 py-2 rounded shadow-md hover:bg-gray-100">
    <FaGoogle /> <span>Sign in with Google</span>
  </button>
  
  <button 
    onClick={sendOtp} 
    className="flex items-center space-x-2 mt-4 bg-airbnb-coral text-white px-4 py-2 rounded shadow-md hover:bg-red-500">
    <FaPhone /> <span>Sign in with Phone</span>
  </button>
  
  <div id="recaptcha-container" className="mt-4"></div>
</div>

); };

export default Login;

