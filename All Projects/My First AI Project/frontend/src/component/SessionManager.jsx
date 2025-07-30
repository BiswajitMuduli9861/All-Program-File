import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SessionManager = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const autoLogout = () => {
      const userExist = localStorage.getItem("userExist");
      if (userExist) {
        const currentTime = new Date().getTime();
        const lastActiveTime = localStorage.getItem("lastActiveTime");

        if (lastActiveTime && currentTime - lastActiveTime > 3600000) { // 1 hour
          localStorage.removeItem("userExist");
          localStorage.removeItem("lastActiveTime");
          navigate("/login");
        } else {
          localStorage.setItem("lastActiveTime", currentTime);
        }
      } else {
        localStorage.removeItem("lastActiveTime");
        navigate("/login");
      }
    };

    autoLogout();
  }, [navigate]);

  return children;
};

export default SessionManager;
