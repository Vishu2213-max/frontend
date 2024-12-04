import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('Hello, welcome to my page!');

  const handleClick = () => {
    setText('You clicked the button!');
  };

  useEffect(() => {
    // This code runs when the component mounts
    console.log('Component mounted');

    console.log('Text updated:');

    // Cleanup function //
    return () => {
      console.log('Cleanup on unmount ');
    };
  }, [text]); 

  const html = (
    <>                           {/*fragmentation*/}
    <div className="App">
      <header className="App-header">    
        <h1>Hello World</h1>
      </header>
      <main>
        <p>{text}</p>           {/* dynamic handling */}
        <button onClick={handleClick}>Click Me!</button>
      </main>
    </div>
    </>
  );

  return html;               //html content in variable//
}

export default App;