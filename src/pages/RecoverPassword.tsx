import React, { useState } from 'react';
import { supabase } from '../lib/api';
import Navbar from '../components/NavBar/NavBar';

const RecoverPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordRecovery = async () => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email);

      if (error) {
        setError('Error initiating password recovery. Please try again.');
        console.error(error);
      } else if (data) {
        console.log('Password recovery initiated. Check your email for further instructions.');
        // Puedes redirigir a otra página o mostrar un mensaje adicional aquí
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="w-full flex justify-center items-center bg-yellow-200">
        <div className="w-full sm:w-2/3 max-w-md p-5 bg-white shadow flex flex-col text-base rounded-md">
          <span className="font-sans text-2xl text-center pb-2 mb-4 border-b mx-4 align-center">
            Recover Password
          </span>
          <label className="mt-3 mb-2 text-lg" htmlFor="email">
            Enter your email address:
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-100 border py-1 px-3 mb-2 rounded-md"
            required
            value={email}
            onChange={handleEmailChange}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="button"
            className="flex mx-auto justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out mt-4"
            onClick={handlePasswordRecovery}
          >
            Send Recovery Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
