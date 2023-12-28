import React from 'react';

function LoginPage() {
    return (
      <div className="text-center">
        <div className="mb-8">
          <img src="https://placehold.co/50x50" alt="Superlist logo" className="mx-auto mb-4" />
          <h1 className="text-4xl font-semibold mb-2">Welcome to TurboWeb</h1>
          <p className="text-gray-500">Made for teams.<br />Designed for people.</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <button className="bg-blue-600 text-white w-64 py-2 rounded-full flex items-center justify-center shadow-lg">
            <i className="fab fa-google mr-2"></i> Continue with Google
          </button>
          <button className="bg-black text-white w-64 py-2 rounded-full flex items-center justify-center shadow-lg">
            <i className="fab fa-apple mr-2"></i> Sign in with Apple
          </button>
          <button className="bg-gray-300 text-gray-700 w-64 py-2 rounded-full flex items-center justify-center shadow-lg">
            <i className="fas fa-envelope mr-2"></i> Continue with email
          </button>
        </div>
      </div>
    );
  }

export default LoginPage;