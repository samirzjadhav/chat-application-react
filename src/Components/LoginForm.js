import { useState } from "react";
import axios from "axios";

const projectID = "ce196766-dfea-44ff-82d7-488294f93ac6";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError();
    } catch (err) {
      setError("Oops, Incorrect credentials");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            className="input"
            placeholder="username"
            required
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="input"
            placeholder="password"
            required
          />
          <div className="items-center">
            <button className="button">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
