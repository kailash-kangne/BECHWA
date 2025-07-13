import React, { useState } from 'react';
import axios from 'axios';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const toggleMode = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await axios.post('http://localhost:8000/api/token/', {
          username: form.username,
          password: form.password,
        });
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
        alert("Login successful");
      } else {
        await axios.post('http://localhost:8000/api/register/', form);
        alert("Registration successful. Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required /><br />
        {!isLogin && <input name="email" placeholder="Email" onChange={handleChange} required />}<br />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required /><br />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <p onClick={toggleMode} style={{ cursor: 'pointer', color: 'blue' }}>
        {isLogin ? "Create an account" : "Have an account? Login"}
      </p>
    </div>
  );
}

export default AuthForm;
