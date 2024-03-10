import { Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import "../styles/header.css";

const Header = () => {
  const { isAuthenticated, user, signoutUser } = useAuth();

  return (
    <div className="header">
      <div className="logo">Fitness-First</div>
      <nav className="nav">
        <Link to="/activityForm">Activities</Link>
        {isAuthenticated() ? (
          <>
            <span>Welcome, {user.email}</span>
            <button onClick={signoutUser}>Sign out</button>
          </>
        ) : (
          <>
            <Link to="/signin">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
