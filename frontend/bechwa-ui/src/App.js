import React from 'react';
import AuthForm from './components/AuthForm';

function App() {
  const isLoggedIn = !!localStorage.getItem("access");

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>🛍️ Bechwa Store</h1>

      {isLoggedIn ? (
        <>
          <p>Welcome back! 🎉</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <AuthForm />
      )}
    </div>
  );
}

export default App;
