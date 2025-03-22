import { IErrorProps } from "../interfaces";

const ErrorComponent = ({ message }: IErrorProps) => {
  return <p>{message}</p>;
};

export default ErrorComponent;
