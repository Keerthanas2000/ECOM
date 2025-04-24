import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Login.css";

import { useNavigate } from "react-router-dom";


function Login() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();


  const validatePhone = () => {
    const isValid = /^[6-9]\d{9}$/.test(mobile.trim());
    setError(!isValid);
    if (isValid) {
      handleMobileLogin();
    }
  };

  const handleMobileLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/user/login", {
        mobile: mobile.trim(),
      });
      alert(res.data.message);
      navigate(`/verify-otp/${mobile.trim()}`);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };
  

  const openModal = (file, title) => {
    const modalLabel = document.getElementById("textModalLabel");
    const modalContent = document.getElementById("modalContent");

    modalLabel.textContent = title;
    modalContent.textContent = "Loading...";

    fetch(file)
      .then((res) => res.text())
      .then((text) => {
        modalContent.innerHTML = text.replace(/\n/g, "<br>");
        new window.bootstrap.Modal("#textModal").show();
      })
      .catch(() => (modalContent.textContent = "Failed to load content."));
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="login-box">
        <h4>
          <strong>Login</strong> or <strong>Signup</strong>
        </h4>

        <div className="mb-3 mt-4">
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          {error && (
            <div className="text-danger small mt-1">
              Please enter a valid 10-digit mobile number.
            </div>
          )}
        </div>

        <p className="small-text mt-3">
          By continuing, I agree to the{" "}
          <button
            className="btn btn-link p-0 text-link"
            onClick={() => openModal("tc.txt", "Terms of Use")}
          >
            Terms of Use
          </button>{" "}
          &{" "}
          <button
            className="btn btn-link p-0 text-link"
            onClick={() => openModal("policy.txt", "Privacy Policy")}
          >
            Privacy Policy
          </button>{" "}
          and I am above 18 years old.
        </p>

        <div className="d-grid mt-3">
          <button className="btn btn-custom" onClick={validatePhone}>
            CONTINUE
          </button>
        </div>

        <p className="small-text text-center mt-3">
          Have trouble logging in?{" "}
          <button
            className="btn btn-link p-0 text-link"
            onClick={() => openModal("gethelp.txt", "Contact us")}
          >
            Get help
          </button>
        </p>

        {/* Modal */}
        <div
          className="modal fade"
          id="textModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="textModalLabel"></h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body" id="modalContent">
                Loading...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
