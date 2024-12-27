import React, { useState } from 'react'


const CaptainLogin = () => {
  const [captainUserEmail, setCaptainUserEmail]=useState();
  const [captainUserPassword, setCaptainUserPassword]=useState();

  function handleCaptainLogin(e){
    e.preventDefault();
    const captainData = {
      email: captainUserEmail,
      password: captainUserPassword
    }
    console.log(captainData);

    setCaptainUserEmail("");
    setCaptainUserPassword("");
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
        <a href="/login" className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
          Login as User
        </a>
        <a href="/register" className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
          Register as User
        </a>
      </div>
    </nav>

    {/* Main Content */}
    <div className="flex flex-1 items-center justify-center px-6 lg:px-20">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-xl shadow-lg">
      <div className=" flex justify-center flex-col p-4 rounded-lg">

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-gray-800 flex justify-center mb-5 ">Captain Login</h1>
        <p className="text-gray-600 flex justify-center gap-5 mt-2">Please enter your credentials to log in.</p>
        </div>
        {/* Form */}
        <form className="space-y-4" onSubmit={handleCaptainLogin}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={captainUserEmail}
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e)=>setCaptainUserEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={captainUserPassword}
              placeholder="Enter your password"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e)=>setCaptainUserPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        {/* Caption */}
        <p className="text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <a href="/captainRegister" className="text-black font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default CaptainLogin