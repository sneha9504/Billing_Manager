/**
 * Utility function to conditionally join class names.
 * Similar to the `clsx` or `classnames` packages.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
