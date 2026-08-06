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
    "font-medium inline-flex items-center justify-center gap-2 transition-colors duration-200";

  const variants = {
    primary: "bg-ink text-paper hover:bg-accent",
    secondary:
      "border border-stone-300 dark:border-stone-700 text-ink hover:border-accent hover:text-accent",
    ghost: "text-ink hover:text-accent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClassName = `${baseStyles} ${variants[variant] ?? variants.primary} ${sizes[size]} ${className}`;

  const Component = href ? "a" : "button";

  return (
    <Component onClick={onClick} href={href} className={combinedClassName} {...props}>
      {children}
    </Component>
  );
}
