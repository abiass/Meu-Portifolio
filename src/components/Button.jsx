import { motion } from "framer-motion";

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  ...props
}) {
  const baseStyles =
    "font-semibold rounded-lg transition-all inline-flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white hover:opacity-90 shadow-lg hover:shadow-xl dark:shadow-lg/50",
    secondary:
      "border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 shadow-sm hover:shadow-md",
    outline:
      "border-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400",
    ghost:
      "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = motion(href ? "a" : "button");

  return (
    <MotionComponent
      onClick={onClick}
      href={href}
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
