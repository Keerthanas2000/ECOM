const User = require("../model/user");
const login = async (req, res) => {
  const { mobile } = req.body;

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    return res.status(400).json({ message: "Invalid mobile number" });
  }

  try {
    console.log("Login API hit with mobile:", mobile);
  
    let user = await User.findOne({ mobile });
    if (!user) {
      user = await User.create({ mobile });
    }
  
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    console.log("Generated OTP:", otp);
  
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
  
    user.otp = otp;
    user.otpExpiresAt = otpExpiresAt;
    await user.save();
  
    console.log(`OTP for ${mobile}: ${otp}`);
  
    res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }

};
const verifyOtp = async (req, res) => {
  const { mobile, otp } = req.body;

  try {
    const user = await User.findOne({ mobile });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (new Date() > user.otpExpiresAt) {
      return res.status(400).json({ message: "OTP expired" });
    }

    user.otp = null;
    user.otpExpiresAt = null;
    await user.save();

    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = { login, verifyOtp };
