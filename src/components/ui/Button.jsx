"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useRef, useState } from "react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Button({
  children,
  className,
  variant = "primary",
  magnetic = true,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    if (!magnetic || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full transition-colors overflow-hidden px-8 py-4";
  
  const variants = {
    primary: "bg-accent text-brand hover:brightness-110",
    outline: "border border-text-secondary/30 text-text-primary hover:border-accent hover:text-accent",
    ghost: "text-text-primary hover:bg-brand-surface",
  };

  const Content = (
    <motion.button
      ref={ref}
      className={cn(baseStyles, variants[variant], className)}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );

  return Content;
}
