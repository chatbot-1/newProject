import { useState } from "react";
import "./App.css";
// import e from "express";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <div>
        <h1>Register Now</h1>
        <form onSubmit={registerUser}>
          <div>
            <label htmlFor="">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <input type="submit" value="register" />
        </form>
      </div>
    </>
  );
}

export default App;
