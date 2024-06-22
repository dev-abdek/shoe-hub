import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Phonebook from "../../components/Phonebook";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(!isLoggedIn);
    navigate("/phonebook");
  };

  return (
    <section className="loginPage">
      {isLoggedIn ? (
        <Phonebook />
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor="userName">Username:</label> <br />
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="password">Password:</label> <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </section>
  );
};

export default LoginPage;
