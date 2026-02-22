import type { ReactNode } from 'react';

export interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
}

const baseClasses =
  'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent dark:focus:ring-offset-gray-900';
const variantClasses = {
  primary: 'bg-accent text-white hover:opacity-90',
  secondary:
    'border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700',
};

export function Button({ href, variant = 'primary', children, className = '' }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button type="button" className={classes}>{children}</button>;
}
