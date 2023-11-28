import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <Link to="/entrar">Login</Link>
    </div>
  );
};
