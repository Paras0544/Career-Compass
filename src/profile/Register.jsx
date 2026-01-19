// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../firebase/AuthProviderr";

// const Register = () => {
//   const navigate = useNavigate();
//   const { createUser } = useContext(AuthContext);

//   const handleRegister = (e) => {
//     e.preventDefault();

//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     console.log(name, email, password);

//     // create user
//     createUser(email, password)
//       .then((result) => {
//         console.log(result.user);
//         e.target.reset();
//         navigate("/");
//       })
//       .catch((error) => {
//         console.log("ERROR", error.message);
//       });
//   };

//   return (
//     <div className="min-h-screen hero bg-base-200">
//       <div className="flex-col hero-content">
//         <div className="text-center lg:text-left">
//           <h1 className="text-2xl font-bold">Register now!</h1>
//         </div>
//         <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
//           <form onSubmit={handleRegister} className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="name"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="mt-6 form-control">
//               <button className="btn btn-primary">Register</button>
//             </div>
//           </form>
//           <p className="mb-4 ml-4 mr-4">
//             Already have an account? Please <Link to="/login">Login</Link>.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;




import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProviderr";
import { UserPlus, Mail, Lock, Eye, EyeOff } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-xl">
        <div className="text-center">
          <UserPlus className="mx-auto mb-4 text-blue-600" size={60} />
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="mt-2 text-gray-500">Start your journey with us</p>
        </div>
        
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="flex items-center">
              <UserPlus className="absolute text-gray-400 left-3" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="flex items-center">
              <Mail className="absolute text-gray-400 left-3" size={20} />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center">
              <Lock className="absolute text-gray-400 left-3" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a strong password"
                className="w-full py-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-gray-400 right-3"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;