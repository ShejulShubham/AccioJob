import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound(){
  const navigate = useNavigate();

  const goBack = () => navigate(-1); // Goes back one step in history
  const goHome = () => navigate('/'); // Navigates to the root route

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.errorCode}>404</h1>
        <h2 style={styles.heading}>Uncharted Territory</h2>
        <p style={styles.message}>
          It looks like you've ventured off the map. 
          The page you are looking for has drifted into the void.
        </p>
        
        <div style={styles.buttonGroup}>
          <button onClick={goBack} style={{...styles.button, ...styles.outlineBtn}}>
            &larr; Go Back
          </button>
          <button onClick={goHome} style={{...styles.button, ...styles.primaryBtn}}>
            Take Me Home
          </button>
        </div>
      </div>
    </div>
  );
};

// Internal CSS for quick implementation
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  content: {
    maxWidth: '600px',
  },
  errorCode: {
    fontSize: '6rem',
    margin: '0',
    color: '#e2e8f0',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: '2rem',
    color: '#2d3748',
    marginBottom: '10px',
  },
  message: {
    fontSize: '1.1rem',
    color: '#718096',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    transition: 'transform 0.2s ease',
  },
  primaryBtn: {
    backgroundColor: '#4a5568',
    color: 'white',
  },
  outlineBtn: {
    backgroundColor: 'transparent',
    border: '2px solid #cbd5e0',
    color: '#4a5568',
  }
};