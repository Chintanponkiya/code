import React from "react";

export default function Logout(props) {
  const handelLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/";
  };
  return (
    <>
      <div className="log-modal">
        <div className="modal-content">
          <h2>Are you sure you want to logout ???</h2>
          <div className="btn-1">
            <button className="btn-2" onClick={handelLogout}>
              Logout
            </button>
            <button className="btn-2" onClick={() => props.setShowLogo(false)}>
              Cancle
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
