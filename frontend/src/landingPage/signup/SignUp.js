import React from 'react';

function SignUp() {
  const redirectToDashboard = () => {
     window.open('http://invest-aura-o9mb.vercel.app/', '_blank');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        padding: '20px',
      }}
    >
      {/* Image at top */}
      <img
        src="/media/images/dash.png"
        alt="Dashboard Preview"
        style={{
          marginBottom: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          width: '70%',
          height: '70%',
        }}
      />

      {/* Heading */}
      <br></br>
      <h2 style={{ marginBottom: '20px', fontSize: '24px', color: '#333' }}>
        Access Your Dashboard
      </h2>

      {/* Button */}
      <br></br>
      <button
        onClick={redirectToDashboard}
        style={{
          padding: '10px 25px',
          fontSize: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );
}
export default SignUp;