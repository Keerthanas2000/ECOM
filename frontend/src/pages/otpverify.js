import React, { useState } from "react";
import axios from "axios";
import { useParams,useNavigate  } from "react-router-dom";
import "./Otp.css";

function OtpVerify() {
  const { mobile } = useParams();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate(); 
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) document.getElementById(`otp-${index + 1}`).focus();
  };

  const handleSubmit = async () => {
    const fullOtp = otp.join("");
    try {
      const res = await axios.post("http://localhost:3000/api/user/verify-otp", {
        mobile,
        otp: fullOtp,
      });
      alert(res.data.message);
      sessionStorage.setItem("user", mobile);
      navigate("/home");  // ✅ navigate to Home after successful OTP
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };
  

  const resendOtp = async () => {
    try {
      await axios.post("http://localhost:3000/api/user/login", { mobile });
      alert("OTP resent!");
    } catch (error) {
      alert(error.response?.data?.message || "Could not resend OTP.");
    }
  };

  return (
    <div className="otp-container">
      <h4>Verify with OTP</h4>
      <p>Sent to {mobile}</p>

      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>

      <button className="btn btn-custom mt-3" onClick={handleSubmit}>
        VERIFY
      </button>

      <p className="resend-otp mt-3" onClick={resendOtp}>
        RESEND OTP
      </p>
    </div>
  );
}

export default OtpVerify;
