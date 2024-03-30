"use client";
import { ButtonHTMLAttributes, ReactNode, useRef, Ref } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "../utils/cn";

const buttonVariants = cva(
  "flex items-center hover:bg-secondary-hover transition cursor-pointer ",
  {
    variants: {
      variant: {
        icon: "justify-center bg-transparent ",
        setting: "relative gap-4 pl-4 pr-9 py-3",
        menu: "pl-3 pr-24 py-3 bg-white dark:bg-black rounded-xl ",
        signin : "justify-center border-primary-border hover:bg-secondary-blue",

      },
      size: {
        default: "rounded p-2",
        icon: "rounded-full w-10 h-10 p-2.5",
        signin : "rounded-3xl px-3 py-2 gap-2 border-[1px]",
        setting : "text-sm font-normal",
      },
    },
    defaultVariants: {
      variant: "icon",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  buttonRef?: Ref<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  buttonRef,
  ...props
}) => {
  return (
    <button ref={buttonRef} className={cn(buttonVariants({variant, size, className}))} {...props}>
      {children}
    </button>
  );
};

export default Button;
