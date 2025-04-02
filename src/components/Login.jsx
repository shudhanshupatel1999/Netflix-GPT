import React, { useState, useRef } from 'react';
import Header from './Header';
import checkValidData from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isSignInFormnew, setIsSignInFormnew] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null); 
  const [nameMessage, setNameMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null); // If using sign-up, we need the name field

  const handleButtonClick = () => {
    // validate the form data
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    let message = checkValidData(emailValue, passwordValue); // Check for email/password errors
    setErrorMessage(message);

    if (message) return;

    
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: "https://images.pexels.com/photos/31379292/pexels-photo-31379292/free-photo-of-serene-foggy-landscape-with-wildflowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        })
        .then(() => {
          // Profile updated!
          // ...
          navigate("./browse")
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error.message);
        });
        
        console.log(user);
        // navigate("/browse")
    // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigate("/browse")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+ "-"+errorMessage);
    });
    }



    // if (!isSignInForm && name.current) {  // If it's the signup form
    //   const nameValue = name.current.value;
    //   if (!nameValue.trim()) {
    //     setNameMessage("Name is required");
    //   } else {
    //     setNameMessage(null); // Clear name message when name is valid
    //   }
    // }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // Clear any existing errors when switching forms
    setNameMessage(null); // Reset name message on toggle
  }

  const togglebutton = () => {
    setIsSignInFormnew(!isSignInFormnew)
  }

  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <Header />
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg"
          alt="background"
        />
      </div>

      {/* Login Form */}
      <form onSubmit={(e) => e.preventDefault()} 
            className="w-96 p-12 bg-black bg-opacity-80 text-white rounded-lg shadow-lg z-10 relative"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Show name field only during sign-up */}
        {!isSignInForm && (
          <input 
            ref={name}
            type="text" 
            placeholder="Full Name"
            className="block w-full p-3 my-2 bg-gray-700 rounded" 
          />
        )}
        <p className="text-red-500 py-1">{nameMessage}</p> {/* Display name error message */}

        {!isSignInFormnew && (
          <input
           ref={name}
           type='text'
           placeholder='Last Name'
           className='block w-full p-3 my-2 bg-gray-700 rounded'
          />
        )}

        {/* Change type to email for better validation */}
      <input
        ref={email} 
        type="email" 
        placeholder="Email Address" 
        className="block w-full p-3 my-2 bg-gray-700 rounded" 
      />

        <input 
          ref={password}
          type="password" 
          placeholder="Password" 
          className="block w-full p-3 my-2 bg-gray-700 rounded" 
        />
        <p className="text-red-500 py-1">{errorMessage}</p> {/* Display email/password error message */}

        <button className="w-full p-3 mt-4 bg-red-700 hover:bg-red-800 cursor-pointer rounded"
                onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className='mt-5 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up" : "Already registered? Sign In now"}
        </p>

        {/* <p className='mt-5 cursor-pointer' onClick={togglebutton}>
          {isSignInFormnew ? "Hello World!" : "By World!"}
        </p> */}


      </form>
    </div>
  );
};

export default Login;
