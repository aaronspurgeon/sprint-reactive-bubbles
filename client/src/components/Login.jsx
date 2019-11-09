import React, { useState } from "react";
import api from "../utils/api";

const Login = () => {
  const [err, setErr] = useState();
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    api().post('/api/login', data)
      .then(res => {
        localStorage.setItem('token', res.data.payload)

      })
      .catch(err => {
        setErr(err.response.data.message)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='username' placeholder='Username' value={data.username} onChange={handleChange} />
      <input type="password" name='password' placeholder='Password' value={data.password} onChange={handleChange} />

      <button type='submit'>Login!</button>
    </form>
  );
};

export default Login;
