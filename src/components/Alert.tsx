import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Alert = ({ children }: props) => {
  return <div>{children}</div>;
};

export default Alert;
