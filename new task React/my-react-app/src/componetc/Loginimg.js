import React, { useState } from "react";
import Logo from "../img/Alogo.svg";

export default function Loginimg() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsernamer] = useState(false);
  const [passworderror, setPassworderror] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    setUsernamer("");
    setPassworderror("");

    if (userId === "admin" && password === "admin") {
      console.log("Logged in!");
      window.location.href = "./Zeronsec";
    } else {
      if (userId !== "admin") {
        setUsernamer("Invalid username");
      }
      if (password !== "admin") {
        setPassworderror("Invalid password");
      }
    }
  };
  return (
    <>
      <div className="Logo">
        <div className="side-bar">
          <img src={Logo} alt="" width={150} /> <br />
          <form action="" onSubmit={handleLogin}>
            <input
              name="user"
              id="user"
              type="text"
              className="Login-input"
              placeholder="Enter user id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              onKeyPress={() => setUsernamer("")}
            />
            <div className="container-error">
              {username && (
                <div className="error" style={{ color: "red" }}>
                  {username}
                </div>
              )}
            </div>

            <div className="form_item">
              <input
                type={showPassword ? "password" : "text"}
                name="passw"
                id="passw"
                placeholder="Password..."
                className="Login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={() => setPassworderror("")}
              />

              <div className="container-error">
                {passworderror && (
                  <div className="error" style={{ color: "red" }}>
                    {passworderror}
                  </div>
                )}
              </div>

              <i
                className={
                  showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
                }
                id="eye"
                onClick={() => setShowPassword(!showPassword)}
              ></i>

              <div className="form-btn-container">
                <button className="form-btn" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
