import clsx from 'clsx';
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: "primary" | "secondary" | "danger";
    size?: "xs" | "md" | "lg";
    children: ReactNode;
}

const Button:React.FC<ButtonProps> = ({
    children,
    className,
    variant = "primary",
    size = "md",
    ...props
}) => {
    const variantClass = {
        primary: "bg-blue-500 hover:bg-blue-700",
        secondary: "bg-gray-500 hover:bg-gray-700",
        danger: "bg-red-500 hover:bg-red-700",
    };

    const sizeClass = {
        xs: "px-2 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-5 py-4 text-lg"
    }
  return (
    <button
        className={clsx(
            'transition duration-300 text-white rounded-lg cursor-pointer',
            variantClass[variant],
            sizeClass[size],
            className
        )}
        {...props}
    >
        {children}
    </button>
)
}

export default Button