"use client";

import { motion } from "framer-motion";
import { cn } from "./Button";

export function Card({
  children,
  className,
  elevated = false,
  tilted = false,
  ...props
}) {
  const baseStyles = "relative rounded-2xl bg-brand-surface border border-white/5 overflow-hidden p-6 md:p-8 transition-colors";
  
  const elevatedStyles = elevated ? "bg-brand-raised shadow-2xl shadow-accent/5 border-white/10 z-10" : "";
  
  const transform = tilted ? "rotate-2 scale-105" : "";

  return (
    <motion.div
      className={cn(baseStyles, elevatedStyles, transform, className)}
      whileHover={tilted ? {} : { y: -4, transition: { duration: 0.2 } }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
