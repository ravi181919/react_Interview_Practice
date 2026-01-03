import { RiLoader2Fill } from "react-icons/ri";
const Loader = ({ className }) => {
  return (
    <div className="min-h-full w-full flex justify-center items-center">
      <span className={`animate-spin ${className}`}>
        <RiLoader2Fill />
      </span>
    </div>
  );
};

export default Loader;
