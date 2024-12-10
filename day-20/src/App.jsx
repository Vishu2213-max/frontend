import React, { useState } from 'react';

const HomePage = () => {
  const [showCards, setShowCards] = useState(false);

  const handleShowCards = () => {
    setShowCards(!showCards);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Our Home Page!</h1>
      <button onClick={handleShowCards}>
        {showCards ? 'Hide Cards' : 'Show Cards'}
      </button>

      {showCards && (
        <div style={{ marginTop: '20px' }}>
          <h2>Cards</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
              <h3>Card 1</h3>
              <p>This is the first card.</p>
            </div>
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
              <h3>Card 2</h3>
              <p>This is the second card.</p>
            </div>
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
              <h3>Card 3</h3>
              <p>This is the third card.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;