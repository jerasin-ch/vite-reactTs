import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: Props): JSX.Element | null {
  const token = localStorage.getItem("token");
  return token != null ? children : <Navigate to="/" />;
}
