import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Our Home Page!</h1>
      <Link to="/card">
        <button>
          Go to Cards Page
        </button>
      </Link>
    </div>
  );
};

export default HomePage;