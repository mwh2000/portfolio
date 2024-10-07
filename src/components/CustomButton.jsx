/* eslint-disable react/prop-types */
// src/components/CustomButton.js
// import "./CustomButton.css"; // Optional: For custom styles

const CustomButton = ({
  onClick,
  children,
  type = "button",
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-base rounded-md bg-primary text-secondary border-2 border-primary py-1 px-2 md:hover:bg-transparent md:hover:text-primary transition-all md:hover:translate-y-0.5 active:outline-none active:ring-2 active:ring-primary active:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
