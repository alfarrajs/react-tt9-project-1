import React, { useContext, useEffect } from 'react';
import { ROLES } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from "../../hooks/useTheme";
const ProfilePage = () => {
  const navigate = useNavigate();
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const role = localStorage.getItem('role');

    if (!role || role === ROLES.GUEST) {
      navigate('/login');
      setTimeout(() => {
        alert('Hey Guest, sign in before!');
      }, 1000);
    }
  });

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className={`${themeContext.theme}`} style={{position:"relative",top:"-3.1rem",height:"100vh"}}> 
      <div style={styles.imageContainer}>
        <img
          src="../../../assets/images/Rectangle 1 (1).png" // Replace with your profile image URL
          alt="Profile"
        />
      </div>
      <div style={styles.inputContainer}>
        <input
          readOnly
          value={localStorage.getItem('name')}
          type="text"
          placeholder="Enter your name"
          style={styles.input}
        />
      </div>
      <div style={styles.buttonContainer}>
        <button onClick={handleGoHome} style={styles.button}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
  profileImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  input: {
    width: '300px',
    height: '40px',
    fontSize: '16px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    background: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default ProfilePage;