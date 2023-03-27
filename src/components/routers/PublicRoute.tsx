import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export default function PublicRoute({ children }: Props): JSX.Element | null {
  const token = localStorage.getItem("token");
  return token != null ? <Navigate to="/dashboard" /> : children;
}
