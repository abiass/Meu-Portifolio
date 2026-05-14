import { motion } from "framer-motion";

export function Card({
  children,
  variant = "default",
  hover = true,
  className = "",
  ...props
}) {
  const baseStyles = "rounded-xl transition-all";

  const variants = {
    default:
      "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm",
    elevated:
      "bg-white dark:bg-zinc-800 shadow-lg dark:shadow-none border border-zinc-100 dark:border-zinc-700",
    gradient:
      "bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700",
    glass:
      "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-700/50",
  };

  const hoverStyles = hover
    ? "hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 dark:hover:border-indigo-800"
    : "";

  const combinedClassName = `${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`;

  return (
    <motion.div
      className={combinedClassName}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
