import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Button = ({ children }: Props) => {
  return <div className="btn btn-primary">{children}</div>;
};

export default Button;

// // const Alert = ({ children }: Props) => {
//   return <div className="alert alert-primary">{children}</div>;
// };
