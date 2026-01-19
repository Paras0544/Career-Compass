

// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../firebase/AuthProviderr';



// const Login = () => {
//     const navigate = useNavigate();
//     const { signInUser, signInWithGoogle } = useContext(AuthContext);

//     const handleLogin = e => {
//         e.preventDefault();
//         const email = e.target.email.value;
//         const password = e.target.password.value;

//         console.log(email, password);
//         signInUser(email, password)
//             .then(result => {
//                 console.log(result.user);
//                 e.target.reset();
//                 navigate('/')
//             })
//             .catch(error => {
//                 console.log('ERROR', error.message)
//             })
//     }

//     const handleGoogleSignIn = () => {
//         signInWithGoogle()
//             .then(result => {
//                 console.log(result.user);
//                 navigate('/');
//             })
//             .catch(error => console.log('ERROR', error.message))
//     }

//     return (
//         <div className="min-h-screen hero bg-base-200">
//             <div className="flex-col hero-content">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-2xl font-bold">Login now!</h1>
//                 </div>
//                 <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
//                     <form onSubmit={handleLogin} className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password" name="password" placeholder="password" className="input input-bordered" required />
//                             <label className="label">
//                                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                             </label>
//                         </div>
//                         <div className="mt-6 form-control">
//                             <button className="btn btn-primary">Login</button>
//                         </div>
//                     </form>
//                     <p className='mb-4 ml-4'>
//                         New to this website? please <Link to="/register">Register</Link>
//                     </p>
//                     <p>
//                         <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;






// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../firebase/AuthProviderr';

// const Login = () => {
//   const navigate = useNavigate();
//   const { signInUser, signInWithGoogle } = useContext(AuthContext);

//   const handleLogin = e => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     signInUser(email, password)
//       .then(result => {
//         console.log(result.user);
//         e.target.reset();
//         navigate('/');
//       })
//       .catch(error => {
//         console.log('ERROR', error.message);
//       });
//   };

//   const handleGoogleSignIn = () => {
//     signInWithGoogle()
//       .then(result => {
//         console.log(result.user);
//         navigate('/');
//       })
//       .catch(error => console.log('ERROR', error.message));
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white shadow-md rounded-xl">
//         <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
        
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter your email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <div>
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Enter your password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="w-full py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
//           >
//             Sign In
//           </button>
//         </form>
        
//         <div className="mt-4 text-center">
//           <p className="mb-2 text-sm text-gray-600">Or sign in with</p>
//           <button
//             onClick={handleGoogleSignIn}
//             className="px-4 py-2 text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-600"
//           >
//             Google Sign-In
//           </button>
//         </div>
        
//         <div className="mt-4 text-center">
//           <p className="text-sm">
//             Don't have an account?{' '}
//             <Link to="/register" className="text-blue-500 hover:underline">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../firebase/AuthProviderr';
// import { FcGoogle } from 'react-icons/fc';

// const Login = () => {
//   const navigate = useNavigate();
//   const { signInUser, signInWithGoogle } = useContext(AuthContext);

//   const handleLogin = e => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     signInUser(email, password)
//       .then(result => {
//         console.log(result.user);
//         e.target.reset();
//         navigate('/');
//       })
//       .catch(error => {
//         console.log('ERROR', error.message);
//       });
//   };

//   const handleGoogleSignIn = () => {
//     signInWithGoogle()
//       .then(result => {
//         console.log(result.user);
//         navigate('/');
//       })
//       .catch(error => console.log('ERROR', error.message));
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white shadow-md rounded-xl">
//         <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
        
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter your email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <div>
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Enter your password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="w-full py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
//           >
//             Sign In
//           </button>
//         </form>
        
//         <div className="mt-4 text-center">
//           <p className="mb-2 text-sm text-gray-600">Or sign in with</p>
//           <button
//             onClick={handleGoogleSignIn}
//             className="flex items-center justify-center w-full py-2 text-gray-700 transition duration-300 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
//           >
//             <FcGoogle className="mr-2" size={24} />
//             Sign in with Google
//           </button>
//         </div>
        
//         <div className="mt-4 text-center">
//           <p className="text-sm">
//             Don't have an account?{' '}
//             <Link to="/register" className="text-blue-500 hover:underline">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;






// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../firebase/AuthProviderr';
// import { FcGoogle } from 'react-icons/fc';
// import { FaGithub } from 'react-icons/fa';

// const Login = () => {
//   const navigate = useNavigate();
//   const { signInUser, signInWithGoogle } = useContext(AuthContext);

//   const handleLogin = e => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     signInUser(email, password)
//       .then(result => {
//         console.log(result.user);
//         e.target.reset();
//         navigate('/');
//       })
//       .catch(error => {
//         console.log('ERROR', error.message);
//       });
//   };

//   const handleGoogleSignIn = () => {
//     signInWithGoogle()
//       .then(result => {
//         console.log(result.user);
//         navigate('/');
//       })
//       .catch(error => console.log('ERROR', error.message));
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
//       <div className="w-full max-w-md p-8 bg-white border border-white shadow-2xl bg-opacity-20 backdrop-blur-lg rounded-2xl border-opacity-30">
//         <h2 className="mb-6 text-4xl font-extrabold text-center text-white drop-shadow-lg">
//           Welcome Back
//         </h2>
        
//         <form onSubmit={handleLogin} className="space-y-5">
//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 text-white bg-white bg-opacity-20 backdrop-blur-lg rounded-xl placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300"
//               required
//             />
//           </div>
          
//           <div>
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-3 text-white bg-white bg-opacity-20 backdrop-blur-lg rounded-xl placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300"
//               required
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="w-full py-3 text-white transition duration-300 transform shadow-lg bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl hover:from-purple-700 hover:to-pink-600 hover:scale-105"
//           >
//             Sign In
//           </button>
//         </form>
        
//         <div className="mt-6 text-center">
//           <p className="mb-4 text-sm text-white">Or continue with</p>
//           <div className="flex justify-center space-x-4">
//             <button
//               onClick={handleGoogleSignIn}
//               className="p-3 transition transform bg-white rounded-full bg-opacity-20 hover:bg-opacity-40 hover:scale-110"
//             >
//               <FcGoogle size={24} />
//             </button>
//             <button
//               className="p-3 transition transform bg-white rounded-full bg-opacity-20 hover:bg-opacity-40 hover:scale-110"
//             >
//               <FaGithub className="text-white" size={24} />
//             </button>

//           </div>
//         </div>
        
//         <div className="mt-6 text-center">
//           <p className="text-sm text-white">
//             Don't have an account?{' '}
//             <Link to="/register" className="text-purple-200 underline hover:text-white">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../firebase/AuthProviderr';
import { FcGoogle } from 'react-icons/fc';
// import { FaGithub, FaFacebook } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle, signInWithGithub, signInWithFacebook } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        navigate('/');
      })
      .catch(error => {
        console.log('ERROR', error.message);
      });
  };

  const handleSocialSignIn = (provider) => {
    const socialProviders = {
      google: signInWithGoogle,
      github: signInWithGithub,
      facebook: signInWithFacebook
    };

    socialProviders[provider]()
      .then(result => {
        console.log(result.user);
        navigate('/');
      })
      .catch(error => console.log('ERROR', error.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="w-full max-w-md overflow-hidden bg-white shadow-2xl rounded-2xl">
        <div className="p-8">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="mb-8 text-center text-gray-600">
            Sign in to continue to your account
          </p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <a 
                href="#" 
                className="float-right mt-2 text-sm text-purple-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 text-white transition duration-300 transform bg-purple-600 rounded-lg hover:bg-purple-700 hover:scale-105"
            >
              Sign In
            </button>
          </form>
          
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500">Or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleSocialSignIn('google')}
              className="p-3 transition transform rounded-full bg-red-50 hover:bg-red-100 hover:scale-110"
            >
              <FcGoogle size={24} />
            </button>
            {/* <button
              onClick={() => handleSocialSignIn('github')}
              className="p-3 transition transform rounded-full bg-gray-50 hover:bg-gray-100 hover:scale-110"
            >
              <FaGithub size={24} className="text-gray-800" />
            </button>
            <button
              onClick={() => handleSocialSignIn('facebook')}
              className="p-3 transition transform rounded-full bg-blue-50 hover:bg-blue-100 hover:scale-110"
            >
              <FaFacebook size={24} className="text-blue-600" />
            </button> */}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link 
                to="/register" 
                className="font-semibold text-purple-600 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;