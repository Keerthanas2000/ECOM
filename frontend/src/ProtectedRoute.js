import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const user = JSON.parse(sessionStorage.getItem("user"));

      if (!user) {
        navigate("/login");
      } else {
        setIsChecking(false);
      }
    } catch (err) {
      console.error("Failed to parse user:", err);
      navigate("/login");
    }
  }, [navigate]);

  if (isChecking) return <div>Loading...</div>;

  return children;
};

export default ProtectedRoute;
