import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-terra-500 hover:bg-terra-600 focus:ring-terra-500 shadow-sm",
    secondary: "border-transparent text-white bg-gray-900 hover:bg-gray-800 focus:ring-gray-500 shadow-sm",
    outline: "border-terra-600 text-terra-700 bg-transparent hover:bg-terra-50 focus:ring-terra-500",
    white: "border-transparent text-terra-700 bg-white hover:bg-gray-50 focus:ring-white shadow-sm",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};