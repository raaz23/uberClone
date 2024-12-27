import React from 'react'
import { useState } from 'react';

 
 const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleUserRegister(e) {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      password: password
    };
    console.log(userData);
    setEmail("");
    setPassword("");
  }

   return (
     <div className="h-screen w-full flex flex-col bg-gray-50">
       {/* Navigation Bar */}
       <nav className="flex items-center justify-between px-6 lg:px-20 py-4 bg-black text-white">
       <div className="flex justify-between gap-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhvyufX7hUqfNn_k2qzg36G1UhH3LkTGusQ&s" alt="logo"  className="w-6 h-6 mt-1"/>
        <a href='/' className="text-2xl font-bold">Uber</a>
        </div>
         <div className="flex space-x-4">
         <a href='/captainLogin' className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
             Login as Caption
           </a>
           <a href='/captainRegister' className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
             Register as Caption
           </a>
         </div>
       </nav>
 
       {/* Main Content */}
       <div className="flex flex-1 items-center justify-center px-6 lg:px-20">
         <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-xl shadow-lg">
         <div className=" flex justify-center flex-col p-4 rounded-lg">
 
           {/* Heading */}
           <h1 className="text-3xl font-semibold text-gray-800 flex justify-center mb-5 ">User Register</h1>
           <p className="text-gray-600 flex justify-center gap-5 mt-2">Please enter your credentials to Register.</p>
           </div>
           {/* Form */}
           <form className="space-y-4" onSubmit={handleUserRegister}>

           <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-gray-700">Name</label>
              <input
                type="text"
                id="text"
                placeholder="Enter your name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

             <div className="flex flex-col space-y-1">
               <label htmlFor="email" className="text-gray-700">Email</label>
               <input
                 type="email"
                 id="email"
                 placeholder="Enter your email"
                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
               />
             </div>
 
             <div className="flex flex-col space-y-1">
               <label htmlFor="password" className="text-gray-700">Password</label>
               <input
                 type="password"
                 id="password"
                 placeholder="Enter your password"
                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
               />
             </div>
 
             <button
               type="submit"
               className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
             >
               Create Account
             </button>
           </form>
 
           {/* Caption */}
           <p className="text-center text-gray-600 text-sm">
             Don’t have an account?{" "}
             <a href="/login" className="text-black font-semibold hover:underline">
               Login
             </a>
           </p>
         </div>
       </div>
     </div>
   );
 };
 
 export default UserRegister;
 