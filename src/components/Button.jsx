import { Link } from "react-router-dom";

const Button = ({ btnLabel, path }) => {
  return (
    <Link
      to={path}
      className="py-3 px-6 bg-blue-500 text-white rounded-lg"
    >
      {btnLabel}
    </Link>
  );
};

export default Button